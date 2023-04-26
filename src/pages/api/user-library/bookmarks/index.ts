import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";

import {ReadyDataSource} from "@/data-source";

import {UserChapterBookmark} from "../../../../entities/user-chapter-bookmark.entity";
import {authOptions} from "../../auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<UserChapterBookmark[]>,
): Promise<NextApiResponse | boolean> {
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user) return res.status(403).end("Unauthenticated");

    const ds = await ReadyDataSource();
    const bookmarkRepo = ds.getRepository(UserChapterBookmark);

    const bookmarks = await bookmarkRepo.find({
        where: {
            userId: session.user.id,
        },
    });
    
    res.status(200).json(bookmarks);
    return res;
}
