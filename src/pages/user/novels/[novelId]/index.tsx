import Link from "next/link";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import type {ReactElement} from "react";
import React from "react";
import useSWR from "swr";

import type {Novel} from "../../../../entities/novel.entity";
import {fetcher} from "../../../../lib/swrFetcher";

export default function UserNovel(): ReactElement {
    const session = useSession();
    const router = useRouter();
    const {novelId} = router.query;

    const {data: novel, error: novelError} = useSWR<Novel, Error>(() => `/api/novels/${novelId}`, fetcher);

    if (!session?.data?.user || !novel || novelError) return <div>Loading...</div>;

    return (
        <div className="my-2">
            <Link href={`/user/novels/${novelId}/chapters/new`} className="flex justify-start flex-wrap pt-2">
                <p className="text-white border border-white hover:border-basically-white bg-mute-black focus:ring-4 focus:outline-none focus:ring-basically-white rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3">Create Chapter</p>
            </Link>
            <div className="my-2 col-span-3 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-white">
                    <thead className="text-xs text-white uppercase bg-mute-black border-b border-basically-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Chapter Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {novel.chapters.map(c => (<tr className="bg-mute-grey border-b border-mute-black" key={c.id}>
                            <td className="px-6 py-4 text-white">
                                {c.chapterNumber}
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap hover:text-basically-white">
                                <Link href={`/user/novels/${novel.id}/chapters/${c.id}`}>{c.title}</Link>
                            </th>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
