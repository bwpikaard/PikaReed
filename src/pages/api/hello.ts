// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";

import {ReadyDataSource} from "@/data-source";
import {User} from "@/entities/user.entity";

interface Data {
    name: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
): Promise<void> {
    const ds = await ReadyDataSource();
    const userRepos = ds.getRepository(User);
    const user = await userRepos.findOneOrFail({where: {id: 2} });
    // eslint-disable-next-line no-console
    console.log(user);

    res.status(200).json({name: "John Doe"});
}
