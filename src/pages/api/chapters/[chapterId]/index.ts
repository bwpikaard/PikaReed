import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {z} from "zod";

import {ReadyDataSource} from "@/data-source";
import {NovelChapter} from "@/entities/novel-chapter.entity";
import {NovelStatus} from "@/entities/novel-status.enum";

import {authOptions} from "../../auth/[...nextauth]";

const bodySchema = z.object({
    htmlBody: z.string(),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<NovelChapter>,
): Promise<void> {
    const {chapterId} = req.query;

    if (!chapterId || isNaN(Number(chapterId)) || Array.isArray(chapterId)) {
        res.status(500).end("No chapterId");
        return;
    }

    const session = await getServerSession(req, res, authOptions);

    const ds = await ReadyDataSource();
    const chapterRepo = ds.getRepository(NovelChapter);
    
    const chapter = await chapterRepo.findOneOrFail({
        where: {
            id: Number(chapterId),
        },
        relations: {
            novel: true,
        },
    });

    if (req.method === "GET") {
        if (chapter.novel.status !== NovelStatus.Published && chapter.novel.authorId !== session?.user.id) {
            res.status(400).end("Cannot access chapter");
            return;
        }
    
        res.status(200).json(chapter);
    } else if (req.method === "PATCH") {
        if (chapter.novel.authorId !== session?.user.id) {
            res.status(400).end("Cannot access chapter");
            return;
        }
        
        const body = bodySchema.safeParse(req.body);
        if (!body.success) {
            res.status(400);
            return;
        }

        const newChapter = chapterRepo.merge(chapter, {
            htmlBody: body.data.htmlBody,
        });
        await chapterRepo.save(newChapter);

        res.status(200).json(newChapter);
    } else {
        res.status(403);
    }
}
