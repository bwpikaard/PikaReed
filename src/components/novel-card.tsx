import Image from "next/image";
import Link from "next/link";
import {useSession} from "next-auth/react";
import type {ReactElement} from "react";

import type {Novel} from "../entities/novel.entity";
import {StarRating} from "./starRating";

export function NovelCard({novel, basePath}: {novel: Novel; basePath?: string;}): ReactElement {
    const session = useSession();

    const isSaved = novel.saves.some(s => s.userId === session?.data?.user.id);

    const filledStar = <svg aria-hidden="true" className="w-16 h-16 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Filled star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>;
    const emptyStar = <svg aria-hidden="true" className="w-16 h-16 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Empty star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>;

    return <Link href={basePath ? `${basePath}${novel.id}` : `/novels/${novel.id}`}>
        <div className="my-2 flex h-full bg-mute-black grid grid-cols-5 relative rounded-lg">
            <Image className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />

            <div className="col-start-2 col-span-3 pt-8 px-4 pb-4">
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

                <div className="pt-5 text-white text-clip overflow-hidden h-40">
                    <p>{novel.synopsis}</p>
                </div>
            </div>

            <div className="col-span-1 pt-16">
                <div className="flex flex-wrap">
                    {novel.tags.map(t => (<span key={t.code} className="bg-greyish text-white text-md font-medium mt-2 mr-2 px-4 py-1 rounded">{t.code}</span>))}
                </div>
            </div>

            <div className="absolute right-0 top-0">
                {isSaved ? filledStar : emptyStar}
            </div>
        </div>
    </Link>;
}
