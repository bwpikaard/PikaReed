import type {NextApiRequest, NextApiResponse} from "next";

import {ReadyDataSource} from "@/data-source";

import {Novel} from "../../../entities/novel.entity";
import {NovelStatus} from "../../../entities/novel-status.enum";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Novel[]>,
): Promise<void> {
    const ds = await ReadyDataSource();
    const novelRepo = ds.getRepository(Novel);

    const novels = await novelRepo.find({
        where: {status: NovelStatus.Published},
        relations: {
            tags: true,
            reviews: true,
            chapters: true,
        },
        take: 20,
    });

    res.status(200).json(novels);
}
