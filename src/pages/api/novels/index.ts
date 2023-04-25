import type {NextApiRequest, NextApiResponse} from "next";
import {In} from "typeorm";

import {getSimilar, ReadyDataSource} from "@/data-source";
import {Tag} from "@/entities/tag.entity";

import {Novel} from "../../../entities/novel.entity";
import {NovelStatus} from "../../../entities/novel-status.enum";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Novel[]>,
): Promise<void> {
    const {search, tags} = req.query;
    const ds = await ReadyDataSource();
    const novelRepo = ds.getRepository(Novel);

    if (typeof search === "string") {
        const all = await getSimilar(Novel, search, "title", 0.15);
        res.status(200).json(all);
    } else if (typeof tags === "string") {
        const tagRepo = ds.getRepository(Tag);

        const allTags = await tagRepo.find({
            where: {
                code: In(tags.split(",")),
            },
            relations: {
                novels: {
                    tags: true,
                    reviews: true,
                    chapters: true,
                },
            },
        });

        const allNovels: Novel[] = [];
        allTags.flatMap(t => t.novels).forEach(n => {
            if (!allNovels.some(nv => nv.id === n.id)) allNovels.push(n);
        });

        res.status(200).json(allNovels);
    } else {
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
}
