import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {z} from "zod";

import {ReadyDataSource} from "@/data-source";
import {NovelStatus} from "@/entities/novel-status.enum";
import {NovelView} from "@/entities/novel-view.entity";

import {Novel} from "../../../../entities/novel.entity";
import {authOptions} from "../../auth/[...nextauth]";

const bodySchema = z.object({status: z.nativeEnum(NovelStatus)});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Novel>,
): Promise<void> {
    const {novelId} = req.query;

    if (!novelId || isNaN(Number(novelId)) || Array.isArray(novelId)) {
        res.status(500).end("No novelId");
        return;
    }

    const session = await getServerSession(req, res, authOptions);

    const ds = await ReadyDataSource();
    const novelRepo = ds.getRepository(Novel);
    const novelViewRepo = ds.getRepository(NovelView);
    
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
            views: true,
            saves: true,
        },
    });

    if (req.method === "GET") {
        if (novel.status !== NovelStatus.Published && novel.authorId !== session?.user.id && !session?.user.actions.includes("MANAGE_NOVELS")) {
            res.status(400).end("Cannot access novel");
            return;
        }
    
        if (session?.user.id) {
            const view = await novelViewRepo.findOne({
                where: {
                    userId: session.user.id,
                    novelId: novel.id,
                },
            });
            if (!view) {
                const newView = novelViewRepo.create({
                    userId: session.user.id,
                    novelId: novel.id,
                });
                await novelViewRepo.save(newView);
            }
        }
    
        res.status(200).json(novel);
    } else if (req.method === "PATCH") {
        if (!session?.user.actions.includes("UPDATE_NOVEL_STATUS")) {
            res.status(400).end("No perms to update novel");
            return;
        }

        const body = bodySchema.safeParse(req.body);
        if (!body.success) {
            res.status(400).end("Failed to parse body");
            return;
        }

        const updatedNovel = novelRepo.merge(novel, {
            status: body.data.status,
        });
        await novelRepo.save(updatedNovel);

        res.status(200).end("Done");
        return;
    } else {
        res.status(400).end("Bad method");
    }
}
