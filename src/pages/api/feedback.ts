import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {z} from "zod";

import {ReadyDataSource} from "@/data-source";
import {FeedbackSubmission} from "@/entities/feedback.entity";

import {authOptions} from "./auth/[...nextauth]";

const bodySchema = z.object({
    email: z.string(),
    subject: z.string(),
    body: z.string(),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<FeedbackSubmission[]>,
): Promise<NextApiResponse | boolean> {
    const ds = await ReadyDataSource();
    const feedbackRepo = ds.getRepository(FeedbackSubmission);
        
    if (req.method === "GET") {
        const session = await getServerSession(req, res, authOptions);
        if (!session) return res.status(401).end("Unauthenticated");
        if (!session.user.actions.includes("READ_FEEDBACK")) {
            return res.status(400).end("Unauthorized");
        }

        const feedback = await feedbackRepo.find();

        res.status(200).json(feedback);
        return res;
    } else if (req.method === "POST") {
        const body = bodySchema.safeParse(req.body);
        if (!body.success) return res.status(400).end("Failed to parse body");
    
        const submission = feedbackRepo.create({
            email: body.data.email,
            subject: body.data.subject,
            body: body.data.body,
        });
        await feedbackRepo.save(submission);

        return res.status(200).end("Done");
    }

    return res.status(403).end("Invalid method");
}
