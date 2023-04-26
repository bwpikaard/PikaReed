import type {ReactElement} from "react";
import {useState} from "react";
import useSWR from "swr";

import {NovelCard} from "../../components/novel-card";
import type {Novel} from "../../entities/novel.entity";
import {fetcher} from "../../lib/swrFetcher";

function sortNovels(novels: Novel[], sortType: string): Novel[] {
    if (sortType === "views") {
        return novels.sort((a, b) => b.views.length - a.views.length);
    } else if (sortType === "ratings") {
        return novels.sort((a, b) => (b.reviews.length ? b.reviews.reduce((p, c) => (p + c.rating), 0) / b.reviews.length : 0) - (a.reviews.length ? a.reviews.reduce((p, c) => (p + c.rating), 0) / a.reviews.length : 0));
    } else if (sortType === "follows") {
        return novels.sort((a, b) => b.saves.length - a.saves.length);
    }

    return novels;
}

export default function TopRanked(): ReactElement {
    const {data: novels, error: novelsError} = useSWR<Novel[], Error>("/api/novels", fetcher);
    const [sortType, setSortType] = useState<string>("views");

    if (!novels || novelsError) return <div>Loading...</div>;

    return (
        <>
            <div className="flex justify-center flex-wrap pt-10">
                <button type="button" className="text-white border border-white hover:text-basically-white bg-mute-black focus:ring-4 focus:outline-none focus:ring-basically-white rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3" onClick={((): void => { setSortType("views") })}>Views</button>
                <button type="button" className="text-white border border-white hover:text-basically-white bg-mute-black focus:ring-4 focus:outline-none focus:ring-basically-white rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3" onClick={((): void => { setSortType("ratings") })}>Ratings</button>
                <button type="button" className="text-white border border-white hover:text-basically-white bg-mute-black focus:ring-4 focus:outline-none focus:ring-basically-white rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3" onClick={((): void => { setSortType("follows") })}>Follows</button>
            </div>
            <div className="flex justify-center flex-col pb-8">
                {novels.length ? sortNovels(novels, sortType).map(n => (<NovelCard novel={n} key={n.id} />)) : <p className="text-white">No results</p>}
            </div>
        </>
    );
}
