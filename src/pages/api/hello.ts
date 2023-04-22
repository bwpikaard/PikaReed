// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";

import {ReadyDataSource} from "@/data-source";
import {User} from "@/entities/user.entity";

import {authOptions} from "./auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
        res.status(401).write("Unauthenticated");
        return;
    }

    console.log(session.user);

    const ds = await ReadyDataSource();
    const userRepos = ds.getRepository(User);
    const user = await userRepos.findOneOrFail({where: {id: session.user.id}, relations: {roles: true} });

    // eslint-disable-next-line no-console
    console.log(user);

    res.status(200).json(user);
}
