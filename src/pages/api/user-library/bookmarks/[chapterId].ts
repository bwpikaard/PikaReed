import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";

import {ReadyDataSource} from "@/data-source";

import {NovelChapter} from "../../../../entities/novel-chapter.entity";
import {UserChapterBookmark} from "../../../../entities/user-chapter-bookmark.entity";
import {authOptions} from "../../auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<UserChapterBookmark[]>,
): Promise<NextApiResponse | boolean> {
    const {chapterId} = req.query;
    if (!chapterId || isNaN(Number(chapterId)) || Array.isArray(chapterId)) return res.status(500).end("No chapterId");
    
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user) return res.status(403).end("Unauthenticated");

    const ds = await ReadyDataSource();
    const chapterRepo = ds.getRepository(NovelChapter);
    const bookmarkRepo = ds.getRepository(UserChapterBookmark);

    const chapter = await chapterRepo.findOne({where: {id: Number(chapterId)} });
    if (!chapter) return res.status(400).end("No chapter found");

    if (req.method === "POST") {
        const bookmark = await bookmarkRepo.findOne({where: {userId: session.user.id, chapter: {novelId: chapter.novelId} }, relations: {chapter: {novel: true} } });
        if (bookmark) await bookmarkRepo.delete(bookmark.id);

        const newBookmark = bookmarkRepo.create({
            userId: session.user.id,
            chapterId: Number(chapterId),
        });
        await bookmarkRepo.save(newBookmark);

        return res.status(200).end("OK");
    } else if (req.method === "DELETE") {
        const bookmark = await bookmarkRepo.findOne({where: {userId: session.user.id, chapterId: Number(chapterId)} });
        if (bookmark) await bookmarkRepo.delete(bookmark.id);

        return res.status(200).end("OK");
    }
    
    return res.status(400).end("Bad method");
}
