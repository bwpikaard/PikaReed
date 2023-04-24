import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";

import {ReadyDataSource} from "@/data-source";
import {NovelStatus} from "@/entities/novel-status.enum";

import {Novel} from "../../../../entities/novel.entity";
import {authOptions} from "../../auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Novel>,
): Promise<void> {
    const {novelId} = req.query;

    if (!novelId || isNaN(Number(novelId)) || Array.isArray(novelId)) {
        res.status(500).write("No novelId");
        return;
    }

    const session = await getServerSession(req, res, authOptions);

    const ds = await ReadyDataSource();
    const novelRepo = ds.getRepository(Novel);
    
    const novel = await novelRepo.findOneOrFail({
        where: {
            id: Number(novelId),
        },
        relations: {
            tags: true,
            chapters: {
                comments: {
                    user: {
                        roles: true,
                    },
                },
            },
            reviews: {
                user: {
                    roles: true,
                },
            },
        },
    });

    if (novel.status !== NovelStatus.Published && novel.authorId !== session?.user.id) {
        res.status(400).write("Cannot access novel");
        return;
    }

    res.status(200).json(novel);
}
