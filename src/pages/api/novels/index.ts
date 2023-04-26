import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {In} from "typeorm";
import {z} from "zod";

import {getSimilar, ReadyDataSource} from "@/data-source";
import {Tag} from "@/entities/tag.entity";

import {Novel} from "../../../entities/novel.entity";
import {NovelStatus} from "../../../entities/novel-status.enum";
import {authOptions} from "../auth/[...nextauth]";

const bodySchema = z.object({
    title: z.string(),
    synopsis: z.string(),
    tags: z.string(),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Novel[] | Novel>,
): Promise<NextApiResponse | boolean> {
    const ds = await ReadyDataSource();
    const novelRepo = ds.getRepository(Novel);

    if (req.method === "GET") {
        const {search, tags} = req.query;

        if (typeof search === "string") {
            const all = await getSimilar(Novel, search, "title", 0.15);
            const novels = await novelRepo.find({
                where: {id: In(all.map(n => n.id))},
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
                take: 20,
            });

            res.status(200).json(novels);
            return res;
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
                        author: {
                            roles: true,
                        },
                        views: true,
                        saves: true,
                    },
                },
            });

            const allNovels: Novel[] = [];
            allTags.flatMap(t => t.novels).forEach(n => {
                if (!allNovels.some(nv => nv.id === n.id)) allNovels.push(n);
            });

            res.status(200).json(allNovels);
            return res;
        }

        const novels = await novelRepo.find({
            where: {status: NovelStatus.Published},
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
            take: 20,
        });
    
        res.status(200).json(novels);
        return res;
        
    } else if (req.method === "POST") {
        const session = await getServerSession(req, res, authOptions);
        if (!session) return res.status(400).end("Unauthenticated");

        const body = bodySchema.safeParse(req.body);
        if (!body.success) return res.status(400).end("Failed to parse body");

        const tagRepo = ds.getRepository(Tag);
        const tags = await tagRepo.find({
            where: {
                code: In(body.data.tags.split(",")),
            },
        });

        const newNovel = novelRepo.create({
            authorId: session.user.id,
            title: body.data.title,
            synopsis: body.data.synopsis,
            tags: tags,
            status: NovelStatus.Draft,
        });
        await novelRepo.save(newNovel);

        res.status(200).json(newNovel);
    } else {
        return res.status(403).end("Bad method");
    }

    return res;
}
