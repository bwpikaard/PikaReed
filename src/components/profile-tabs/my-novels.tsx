import Link from "next/link";
import type {ReactElement} from "react";
import useSWR from "swr";

import type {Novel} from "../../entities/novel.entity";
import {fetcher} from "../../lib/swrFetcher";
import {NovelCard} from "../novel-card";

export default function MyNovels(): ReactElement {
    const {data: novels, error: novelsError} = useSWR<Novel[], Error>("/api/novels/own", fetcher);

    if (!novels || novelsError) return <div>Loading...</div>;

    return (
        <>
            <div className="pt-10 pb-3">
                <Link href="../../create-novel" className="justify-start">
                    <p className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white border border-white bg-mute-black rounded-lg focus:ring-4 focus:ring-basically-white hover:text-basically-white">Create Novel</p>
                </Link>
            </div>
            <div>
                {novels.map(n => (<NovelCard novel={n} key={n.id} basePath="/user/novels/" />))}
            </div>
        </>
    );
}
