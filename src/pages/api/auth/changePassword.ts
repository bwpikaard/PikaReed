import {compare, hash} from "bcrypt";
import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {z} from "zod";

import {ReadyDataSource} from "../../../data-source";
import {User} from "../../../entities/user.entity";
import {authOptions} from "./[...nextauth]";

const bodySchema = z.object({
    currentPassword: z.string(),
    newPassword: z.string(),
    confirmedPassword: z.string(),
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
    
    if (body.data.newPassword !== body.data.confirmedPassword) return res.status(400);

    const ds = await ReadyDataSource();
    const userRepo = ds.getRepository(User);

    let user = await userRepo.findOne({where: {id: session.user.id}, select: {password: true} });
    if (!user) return res.status(400).write("No user logged in");
    if (!await compare(body.data.currentPassword, user.password)) return res.status(400).write("Incorrect Password");

    user = userRepo.merge(user, {
        password: await hash(body.data.newPassword, 10),
    });
    await userRepo.save(user);

    return res.status(200);
}
