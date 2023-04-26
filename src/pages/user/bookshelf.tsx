import type {ReactElement} from "react";
import useSWR from "swr";

import {NovelCard} from "../../components/novel-card";
import type {Novel} from "../../entities/novel.entity";
import {fetcher} from "../../lib/swrFetcher";

export default function Bookshelf(): ReactElement {
    const {data: novels, error: novelsError} = useSWR<Novel[], Error>("/api/user-library", fetcher);

    if (!novels || novelsError) return <div>Loading...</div>;

    return (
        <>
            {novels.map(n => (<NovelCard novel={n} key={n.id} />))}
        </>
    );
}
