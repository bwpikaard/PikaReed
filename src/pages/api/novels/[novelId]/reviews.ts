import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {z} from "zod";

import {NovelReview} from "@/entities/novel-review.entity";

import {ReadyDataSource} from "../../../../data-source";
import {authOptions} from "../../auth/[...nextauth]";

const bodySchema = z.object({
    title: z.string(),
    comment: z.string(),
    rating: z.number().min(0)
        .max(5),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<NextApiResponse | boolean> {
    const {novelId} = req.query;
    if (!novelId || isNaN(Number(novelId)) || Array.isArray(novelId)) return res.status(500).end("No novelId");

    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).end("Unauthenticated");

    if (req.method !== "POST") return res.status(405).end("Invalid method");
    
    const body = bodySchema.safeParse(req.body);
    if (!body.success) return res.status(400).end("Failed to parse body");

    const ds = await ReadyDataSource();
    const reviewRepo = ds.getRepository(NovelReview);

    const oldReview = await reviewRepo.findOne({
        where: {
            userId: session.user.id,
            novelId: Number(novelId),
        },
    });
    if (oldReview) return res.status(400).end("User already wrote a review");

    const review = reviewRepo.create({
        title: body.data.title,
        comment: body.data.comment,
        rating: body.data.rating,
        novelId: Number(novelId),
        userId: session.user.id,
    });
    await reviewRepo.save(review);

    return res.status(200).end("Done");
}
