import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";

import {ReadyDataSource} from "@/data-source";

import type {Novel} from "../../../entities/novel.entity";
import {UserSavedNovel} from "../../../entities/user-saved-novel.entity";
import {authOptions} from "../auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Novel[]>,
): Promise<NextApiResponse | boolean> {
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user) return res.status(403).end("Unauthenticated");

    const ds = await ReadyDataSource();
    const libraryRepo = ds.getRepository(UserSavedNovel);

    const saves = await libraryRepo.find({
        where: {
            userId: session.user.id,
        },
        relations: {
            novel: {
                tags: true,
                reviews: true,
                chapters: true,
                author: {
                    roles: true,
                },
                views: true,
                saves: true,
            },
        },
        take: 20,
    });
    
    res.status(200).json(saves.map(s => s.novel));
    return res;
}
