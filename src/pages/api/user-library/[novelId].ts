import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";

import {ReadyDataSource} from "@/data-source";
import type {FeedbackSubmission} from "@/entities/feedback.entity";
import {UserSavedNovel} from "@/entities/user-saved-novel.entity";

import {authOptions} from "../auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<FeedbackSubmission[]>,
): Promise<NextApiResponse | boolean> {
    const {novelId} = req.query;
    if (!novelId || isNaN(Number(novelId)) || Array.isArray(novelId)) return res.status(500).end("No novelId");

    const session = await getServerSession(req, res, authOptions);
    if (!session?.user) return res.status(403).end("Unauthenticated");

    const ds = await ReadyDataSource();
    const libraryRepo = ds.getRepository(UserSavedNovel);
        
    if (req.method === "POST") {
        const save = await libraryRepo.findOne({
            where: {
                novelId: Number(novelId),
                userId: session.user.id,
            },
        });
        if (save) return res.status(200).end("Already saved");

        const newSave = libraryRepo.create({
            novelId: Number(novelId),
            userId: session.user.id,
        });
        await libraryRepo.save(newSave);

        return res.status(200).end("Saved");
    } else if (req.method === "DELETE") {
        const save = await libraryRepo.findOne({
            where: {
                novelId: Number(novelId),
                userId: session.user.id,
            },
        });
        if (!save) return res.status(200).end("Not saved");
        await libraryRepo.delete({
            novelId: Number(novelId),
            userId: session.user.id,
        });

        return res.status(200).end("Done");
    }

    return res.status(403).end("Bad method");
}
