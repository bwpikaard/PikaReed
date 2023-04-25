import {compare} from "bcrypt";
import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {z} from "zod";

import {ReadyDataSource} from "../../../data-source";
import {User} from "../../../entities/user.entity";
import {authOptions} from "./[...nextauth]";

const bodySchema = z.object({
    password: z.string(),
    newEmail: z.string(),
    confirmedEmail: z.string(),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<NextApiResponse | boolean> {
    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).end("Unauthenticated");

    if (req.method !== "POST") return res.status(405).end("Bad method");

    const body = bodySchema.safeParse(req.body);
    if (!body.success) return res.status(400).end("Failed to parse body");
    
    if (body.data.newEmail !== body.data.confirmedEmail) return res.status(400).end("Emails don't match");

    const ds = await ReadyDataSource();
    const userRepo = ds.getRepository(User);

    let user = await userRepo.findOne({where: {id: session.user.id} });
    const userPassword = await userRepo.findOne({where: {id: session.user.id}, select: {password: true} });
    if (!user || !userPassword) return res.status(400).end("No user logged in");
    if (!await compare(body.data.password, userPassword.password)) return res.status(400).end("Incorrect password");

    user = userRepo.merge(user, {
        email: body.data.newEmail,
    });
    await userRepo.save(user);

    return res.status(200).end("Done");
}
