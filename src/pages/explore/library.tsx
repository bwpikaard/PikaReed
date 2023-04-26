import {useRouter} from "next/router";
import type {ReactElement} from "react";
import useSWR from "swr";

import {NovelCard} from "../../components/novel-card";
import type {Novel} from "../../entities/novel.entity";
import {fetcher} from "../../lib/swrFetcher";

export default function Library(): ReactElement {
    const router = useRouter();
    const {search} = router.query;
    const {data: novels, error: novelsError} = useSWR<Novel[], Error>(
        typeof search === "string" ? `/api/novels?search=${encodeURIComponent(search)}` : "/api/novels",
        fetcher,
    );

    if (!novels || novelsError) return <div>Loading...</div>;

    return (
        <>
            <div className="flex justify-center flex-col pt-10 pb-8">
                {novels.length ? novels.map(n => (<NovelCard novel={n} key={n.id} />)) : <p className="text-white">No results</p>}
            </div>
        </>
    );
}
