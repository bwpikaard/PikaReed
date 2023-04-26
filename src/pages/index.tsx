import {Carousel} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import type {ReactElement} from "react";
import useSWR from "swr";

import {StarRating} from "../components/starRating";
import type {Novel} from "../entities/novel.entity";
import {fetcher} from "../lib/swrFetcher";

function tableRows(): ReactElement {
    // eslint-disable-next-line no-undef
    const rows: JSX.Element[] = [];
    for (let i = 0;i < 10;i++) {
        const oneRow = <tr className="bg-mute-grey border-b border-mute-black">
            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap hover:text-basically-white">
                <Link href="/novel-homepage">Charlie and the Chocolate Factory</Link>
            </th>
            <td className="px-6 py-4 text-white hover:text-basically-white">
                <Link href="/novel-chapter">{`c${10 - i}`}</Link>
            </td>
            <td className="px-6 py-4 text-white">
            Roald Dahl
            </td>
            <td className="px-6 py-4 text-white">
            192
            </td>
        </tr>;
        rows.push(oneRow);
    }
    return <tbody>{rows}</tbody>;
}

function NovelCarousel({novel}: {novel: Novel;}): ReactElement {
    return <Link href={`/novels/${novel.id}`}>
        <div className="flex h-full bg-mute-black grid grid-cols-5">
            <Image className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />

            <div className="col-start-2 col-span-3 pt-8">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">{novel.title}</h2>
    
                <div className="flex items-center pt-5">
                    <p className="pr-8 text-white">{novel.views.length} Views</p>
                    <p className="pr-8 text-white">{novel.saves.length} Follows</p>
                    <p className="pr-8 text-white">{novel.chapters.length} Chapters</p>
                </div>

                <div className="flex items-center pt-5">
                    <StarRating count={novel.reviews.length ? novel.reviews.reduce((p, c) => (p + c.rating), 0) / novel.reviews.length : 0} />
                    <p className="ml-2 text-sm font-medium text-white dark:text-gray-400">
                        {novel.reviews.length ? `${novel.reviews.reduce((p, c) => (p + c.rating), 0) / novel.reviews.length} of 5 stars` : "No Reviews"}
                    </p>
                </div>

                <div className="pt-5 text-white">
                    <p>{novel.synopsis}</p>
                </div>
            </div>

            <div className="col-span-1 pt-16">
                <div className="flex flex-wrap">
                    {novel.tags.map(t => (<span key={t.code} className="bg-greyish text-white text-md font-medium mt-2 mr-2 px-4 py-1 rounded">{t.code}</span>))}
                </div>
            </div>
        </div>
    </Link>;
}

function NovelListItem({novel}: {novel: Novel;}): ReactElement {
    return <tr className="bg-mute-grey border-b border-mute-black">
        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap hover:text-basically-white">
            <Link href={`/novels/${novel.id}`}>{novel.title}</Link>
        </th>
        <td className="px-6 py-4 text-white">
            {`${novel.author.firstName} ${novel.author.lastName}`}
        </td>
        <td className="px-6 py-4 text-white">
            {novel.chapters.length}
        </td>
        <td className="px-6 py-4 text-white">
            {novel.views.length}
        </td>
    </tr>;
}

export default function Home(): ReactElement {
    const {data: novels, error: novelsError} = useSWR<Novel[], Error>("/api/novels/featured", fetcher);

    if (!novels || novelsError) return <div>Loading...</div>;

    return (
        <>
            <div className="pt-10">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel slideInterval={5000}>
                        {novels.map(n => <NovelCarousel novel={n} key={n.id} />)}
                    </Carousel>
                </div>
            </div>

            <div className="pt-10 pb-10">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-white">
                        <thead className="text-xs border-b border-basically-white text-white uppercase bg-mute-black">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Author
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Chapters
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Views
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {novels.map(n => <NovelListItem novel={n} key={n.id} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
