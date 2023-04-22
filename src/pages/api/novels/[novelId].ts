import type {NextApiRequest, NextApiResponse} from "next";

import {ReadyDataSource} from "@/data-source";

import {Novel} from "../../../entities/novel.entity";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Novel>,
): Promise<void> {
    const {novelId} = req.query;

    if (!novelId || isNaN(Number(novelId)) || Array.isArray(novelId)) {
        res.status(500).write("No novelId");
        return;
    }

    const ds = await ReadyDataSource();

    const novelRepo = ds.getRepository(Novel);
    const novel = await novelRepo.findOneOrFail({
        where: {
            id: Number(novelId),
        },
    });

    res.status(200).json(novel);
}
