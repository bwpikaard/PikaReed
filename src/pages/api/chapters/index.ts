import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {z} from "zod";

import {Novel} from "@/entities/novel.entity";
import {NovelChapter} from "@/entities/novel-chapter.entity";

import {ReadyDataSource} from "../../../data-source";
import {authOptions} from "../auth/[...nextauth]";

const bodySchema = z.object({
    novelId: z.number(),
    chapterNumber: z.number(),
    title: z.string(),
    htmlBody: z.string(),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<NextApiResponse | boolean> {
    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).end("Unauthenticated");

    if (req.method !== "POST") return res.status(405).end("Not POST");

    const body = bodySchema.safeParse(req.body);
    if (!body.success) return res.status(400).end("Failed to parse body");

    const ds = await ReadyDataSource();
    const novelRepo = ds.getRepository(Novel);

    const novel = await novelRepo.findOne({where: {id: body.data.novelId} });
    if (!novel) return res.status(400).end("No novelId");
    if (novel.authorId !== session?.user.id) return res.status(400).end("Not author of novel");

    const chapterRepo = ds.getRepository(NovelChapter);

    const chapter = chapterRepo.create({
        novelId: body.data.novelId,
        chapterNumber: body.data.chapterNumber,
        title: body.data.title,
        htmlBody: body.data.htmlBody,
    });
    await chapterRepo.save(chapter);

    return res.status(200).end("Done");
}
