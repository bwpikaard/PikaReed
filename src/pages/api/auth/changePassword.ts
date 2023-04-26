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
    if (!session) return res.status(401).end("Unauthenticated");

    if (req.method !== "POST") return res.status(405).end("Bad method");

    const body = bodySchema.safeParse(req.body);
    if (!body.success) return res.status(400).end("Failed to parse body");
    
    if (body.data.newPassword !== body.data.confirmedPassword) return res.status(400).end("Passwords don't match");

    const ds = await ReadyDataSource();
    const userRepo = ds.getRepository(User);

    let user = await userRepo.findOne({where: {id: session.user.id} });
    const userPassword = await userRepo.findOne({where: {id: session.user.id}, select: {password: true} });
    if (!user || !userPassword) return res.status(400).end("No user logged in");
    if (!await compare(body.data.currentPassword, userPassword.password)) return res.status(400).end("Incorrect password");

    user = userRepo.merge(user, {
        password: await hash(body.data.newPassword, 10),
    });
    await userRepo.save(user);

    return res.status(200).end("Done");
}
