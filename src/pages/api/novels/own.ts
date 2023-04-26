import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";

import {ReadyDataSource} from "@/data-source";

import {Novel} from "../../../entities/novel.entity";
import {authOptions} from "../auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Novel[]>,
): Promise<NextApiResponse | boolean> {
    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(400).end("Unauthorized");

    const ds = await ReadyDataSource();
    const novelRepo = ds.getRepository(Novel);

    const novels = await novelRepo.find({
        where: {
            authorId: session.user.id,
        },
        relations: {
            tags: true,
            reviews: true,
            chapters: true,
            author: {
                roles: true,
            },
            views: true,
            saves: true,
        },
    });

    res.status(200).json(novels);
    return res;
}
