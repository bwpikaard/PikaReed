import type {NextApiRequest, NextApiResponse} from "next";

import {ReadyDataSource} from "@/data-source";

import {Novel} from "../../../entities/novel.entity";
import {NovelStatus} from "../../../entities/novel-status.enum";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Novel>,
): Promise<void> {
    const ds = await ReadyDataSource();
    const novelRepo = ds.getRepository(Novel);

    const randomNovel = await novelRepo.createQueryBuilder()
        .select("novel.id")
        .from(Novel, "novel")
        .where("novel.status = :status", {status: NovelStatus.Published})
        .orderBy("RANDOM()")
        .limit(1)
        .getOne();

    if (!randomNovel) {
        res.status(400).end("Unable to find novel");
        return;
    }

    const novel = await novelRepo.findOneOrFail({
        where: {id: randomNovel.id},
        relations: {
            tags: true,
            reviews: true,
            chapters: true,
            views: true,
            saves: true,
        },
    });

    res.status(200).json(novel);
}
