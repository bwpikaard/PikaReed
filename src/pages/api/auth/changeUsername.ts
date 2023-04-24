import {compare} from "bcrypt";
import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {z} from "zod";

import {ReadyDataSource} from "../../../data-source";
import {User} from "../../../entities/user.entity";
import {authOptions} from "./[...nextauth]";

const bodySchema = z.object({
    password: z.string(),
    newUsername: z.string(),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<NextApiResponse | boolean> {
    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).write("Unauthenticated");

    if (req.method !== "POST") return res.status(405);

    const body = bodySchema.safeParse(req.body);
    if (!body.success) return res.status(400);

    const ds = await ReadyDataSource();
    const userRepo = ds.getRepository(User);

    let user = await userRepo.findOne({where: {id: session.user.id}, select: {password: true} });
    if (!user) return res.status(400).write("No user logged in");
    if (!await compare(body.data.password, user.password)) return res.status(400).write("Incorrect Password");

    user = userRepo.merge(user, {
        username: body.data.newUsername,
    });
    await userRepo.save(user);

    return res.status(200);
}
