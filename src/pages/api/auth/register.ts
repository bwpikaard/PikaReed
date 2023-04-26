import {hash} from "bcrypt";
import type {NextApiRequest, NextApiResponse} from "next";
import {z} from "zod";

import {ReadyDataSource} from "../../../data-source";
import {User} from "../../../entities/user.entity";

const bodySchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    username: z.string(),
    email: z.string(),
    password: z.string(),
    confirmedPassword: z.string(),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<NextApiResponse | boolean> {
    if (req.method !== "POST") return res.status(405);

    const body = bodySchema.safeParse(req.body);
    if (!body.success) return res.status(400).redirect(`/sign-up?error=${encodeURIComponent("Failed to parse payload.")}`);
    
    if (body.data.password !== body.data.confirmedPassword) return res.status(400).redirect(`/sign-up?error=${encodeURIComponent("Passwords do not match.")}`);

    const ds = await ReadyDataSource();
    const userRepo = ds.getRepository(User);

    const user = await userRepo.findOne({where: {email: body.data.email} });
    if (user) return res.status(400).redirect(`/sign-up?error=${encodeURIComponent("An account already exists with the provided email.")}`);

    const newUser = userRepo.create({
        firstName: body.data.firstName,
        lastName: body.data.lastName,
        username: body.data.username,
        email: body.data.email,
        password: await hash(body.data.password, 10),
    });
    await userRepo.save(newUser);

    return res.status(200).redirect("/sign-in");
}
