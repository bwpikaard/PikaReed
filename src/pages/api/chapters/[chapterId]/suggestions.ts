import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {z} from "zod";

import {ReadyDataSource} from "../../../../data-source";
import {ChapterSuggestion} from "../../../../entities/chapter-suggestion.entity";
import {authOptions} from "../../auth/[...nextauth]";

const bodySchema = z.object({
    comment: z.string(),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<NextApiResponse | boolean> {
    const {chapterId} = req.query;
    if (!chapterId || isNaN(Number(chapterId)) || Array.isArray(chapterId)) return res.status(500).end("No chapterId");

    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).end("Unauthenticated");

    if (req.method !== "POST") return res.status(405).end("Not POST");

    const body = bodySchema.safeParse(req.body);
    if (!body.success) return res.status(400).end("Failed to parse body");

    const ds = await ReadyDataSource();
    const commentRepo = ds.getRepository(ChapterSuggestion);

    const comment = commentRepo.create({
        userId: session.user.id,
        chapterId: Number(chapterId),
        comment: body.data.comment,
    });
    await commentRepo.save(comment);

    return res.status(200).end("Done");
}
