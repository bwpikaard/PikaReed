import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {z} from "zod";

import {ChapterComment} from "@/entities/chapter-comment.entity";

import {ReadyDataSource} from "../../../../data-source";
import {authOptions} from "../../auth/[...nextauth]";

const bodySchema = z.object({
    comment: z.string(),
    parentId: z.number().optional(),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<NextApiResponse | boolean> {
    const {chapterId} = req.query;
    if (!chapterId || isNaN(Number(chapterId)) || Array.isArray(chapterId)) return res.status(500).write("No chapterId");

    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).write("Unauthenticated");

    if (req.method !== "POST") return res.status(405);

    const body = bodySchema.safeParse(req.body);
    if (!body.success) return res.status(400);

    const ds = await ReadyDataSource();
    const commentRepo = ds.getRepository(ChapterComment);

    const comment = commentRepo.create({
        userId: session.user.id,
        chapterId: Number(chapterId),
        comment: body.data.comment,
        parentId: body.data.parentId,
    });
    await commentRepo.save(comment);

    return res.status(200);
}
