import axios from "axios";
import {format} from "date-fns";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import type {
    ChangeEvent, FormEvent, ReactElement,
} from "react";
import {useState} from "react";
import useSWR from "swr";

import {StarRating} from "../../../components/starRating";
import type {Novel} from "../../../entities/novel.entity";
import {NovelStatus} from "../../../entities/novel-status.enum";
import type {UserChapterBookmark} from "../../../entities/user-chapter-bookmark.entity";
import {fetcher} from "../../../lib/swrFetcher";

export default function NovelHomepage(): ReactElement {
    const session = useSession();
    const router = useRouter();
    const {novelId} = router.query;

    const {
        data: novel, error: novelError, mutate: mutateNovel,
    } = useSWR<Novel, Error>(() => `/api/novels/${novelId}`, fetcher);
    const {
        data: bookmarks, error: bookmarksError, mutate: mutateBookmarks,
    } = useSWR<UserChapterBookmark[], Error>(() => `/api/user-library/bookmarks`, fetcher);

    const [reviewRating, setReviewRating] = useState<string>();
    const [reviewTitle, setReviewTitle] = useState<string>();
    const [reviewComment, setReviewComment] = useState<string>();

    const filledStar = <svg aria-hidden="true" className="w-16 h-16 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Filled star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>;
    const emptyStar = <svg aria-hidden="true" className="w-16 h-16 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Empty star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>;

    if (!session?.data?.user) return <div>Loading...</div>;
    if (!novel || novelError || !bookmarks || bookmarksError) return <div>Loading...</div>;

    const isSaved = novel.saves.some(s => s.userId === session?.data?.user.id);

    const handleSubmit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();

        if (!reviewRating?.length || !reviewComment?.length || isNaN(Number(reviewRating))) {
            alert("Missing/invalid field");
            return;
        }

        await axios.post(`/api/novels/${novelId}/reviews`, {
            title: reviewTitle, comment: reviewComment, rating: parseInt(reviewRating),
        }).then(() => { alert("Done") })
            .catch(() => { alert("Error") });
    };

    const changeSaveState = async (): Promise<void> => {
        if (isSaved) {
            await axios.delete(`/api/user-library/${novel.id}`).then(() => {
                mutateNovel(null);
            })
                .catch(() => { alert("Error") });
        } else {
            await axios.post(`/api/user-library/${novel.id}`).then(() => {
                mutateNovel(null);
            })
                .catch(() => { alert("Error") });
        }
    };

    const setNovelStatus = async (status: NovelStatus): Promise<void> => {
        await axios.patch(`/api/novels/${novel.id}`, {status}).then(() => {
            mutateNovel(null);
            alert("Done");
        })
            .catch(() => { alert("Error") });
    };

    const toggleBookmark = async (e: ChangeEvent, chapterId: number): Promise<void> => {
        if (!e.target.checked) {
            await axios.delete(`/api/user-library/bookmarks/${chapterId}`).then(() => { mutateBookmarks() })
                .catch(() => { alert("Error") });
        } else {
            await axios.post(`/api/user-library/bookmarks/${chapterId}`).then(() => { mutateBookmarks() })
                .catch(() => { alert("Error") });
        }
    };

    return (
        <>
            <div className="py-10 grid grid-cols-5 gap-10">
                <div className="col-span-1">
                    <Image className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </div>

                { /* Title, recorded data for novel, description */ }
                <div className="col-span-3 bg-mute-black rounded-lg relative">
                    <h2 className="pt-8 mb-4 text-4xl tracking-tight font-extrabold text-white ml-4 mr-4">{novel.title}</h2>
                        
                    <div className="flex items-center pt-5 ml-4 mr-4">
                        <p className="pr-8 text-white">{novel.views.length} Views</p>
                        <p className="pr-8 text-white">{novel.saves.length} Follows</p>
                        <p className="pr-8 text-white">{novel.chapters.length} Chapters</p>
                    </div>
                    
                    <div className="flex items-center pt-5 ml-4 mr-4">
                        <StarRating count={novel.reviews.length ? novel.reviews.reduce((p, c) => (p + c.rating), 0) / novel.reviews.length : 0} />
                        <p className="ml-2 text-sm font-medium text-white dark:text-gray-400">
                            {novel.reviews.length ? `${Math.round(novel.reviews.reduce((p, c) => (p + c.rating), 0) / novel.reviews.length)} of 5 stars` : "No Reviews"}
                        </p>
                    </div>

                    <div className="pt-5 text-white ml-4 mr-4 text-clip overflow-hidden h-40">
                        {novel.synopsis}
                    </div>
                    
                    <div className="absolute right-0 top-0">
                        <div className="focus:cursor-default" onClick={changeSaveState}>{isSaved ?  filledStar : emptyStar}</div>
                    </div>

                    {session?.data.user.actions.includes("UPDATE_NOVEL_STATUS") && <div className="px-2 py-2">
                        <button type="submit" className="inline-flex items-center mx-1 px-5 py-2.5 text-sm font-medium text-center text-white bg-greyish rounded-lg focus:ring-4 focus:ring-basically-white hover:text-basically-white" onClick={async () => setNovelStatus(NovelStatus.Draft)}>
                            Draft
                        </button>
                        <button type="submit" className="inline-flex items-center mx-1 px-5 py-2.5 text-sm font-medium text-center text-white bg-greyish rounded-lg focus:ring-4 focus:ring-basically-white hover:text-basically-white" onClick={async () => setNovelStatus(NovelStatus.PendingReview)}>
                            Pending Review
                        </button>
                        <button type="submit" className="inline-flex items-center mx-1 px-5 py-2.5 text-sm font-medium text-center text-white bg-greyish rounded-lg focus:ring-4 focus:ring-basically-white hover:text-basically-white" onClick={async () => setNovelStatus(NovelStatus.Hidden)}>
                            Hidden
                        </button>
                        <button type="submit" className="inline-flex items-center mx-1 px-5 py-2.5 text-sm font-medium text-center text-white bg-greyish rounded-lg focus:ring-4 focus:ring-basically-white hover:text-basically-white" onClick={async () => setNovelStatus(NovelStatus.Published)}>
                            Published
                        </button>
                    </div>}
                </div>
            </div>

            { /* Novels chapters and tags (tags directly under novel cover so chapters are in line with novel data) */ }
            <div className="grid grid-cols-5 gap-10">
                <div className="col-span-1">
                    <div className="flex flex-wrap">
                        {novel.tags.map(t => (<span key={t.code} className="bg-mute-black text-white text-md font-medium mt-2 mr-2 px-4 py-1 rounded">{t.code}</span>))}
                    </div>
                </div>

                <div className="col-span-3 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-white">
                        <thead className="text-xs text-white uppercase bg-mute-black border-b border-basically-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Chapter
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Bookmark
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {novel.chapters.map(c => (<tr key={c.id} className="bg-mute-grey border-b border-mute-black text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-basically-white">
                                    <Link href={`/novels/${novelId}/chapters/${c.id}`}>{`Ch ${c.chapterNumber} : ${c.title}`}</Link>
                                </th>
                                <td className="px-6 py-4 ">
                                    {format(Date.parse(c.createdAt as unknown as string), "do MMMM Y")}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id={c.id.toString(2)} type="checkbox" checked={bookmarks.some(bc => bc.chapterId === c.id)} onChange={async e => toggleBookmark(e, c.id)} className="ml-6 w-4 h-4 text-greyish bg-white border-white rounded focus:ring-basically-white focus:ring-2" />
                                    </div>
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>

            { /* Novel reviews */ }
            <div className="grid grid-cols-5 gap-10 py-10">
                <div className="col-span-3 col-start-2">
                    <form onSubmit={handleSubmit}>
                        <div className="col-span-1">
                            <label htmlFor="reviewRating" className="pt-5 block mb-2 text-sm font-medium text-white">Novel Rating</label>
                            <input type="number" max="5" min="1" step="1" id="reviewRating" className="block p-3 text-sm text-white bg-mute-black rounded-lg border border-white shadow-sm focus:ring-basically-white focus:border-basically-white" placeholder="1 - 5" required onChange={e => { setReviewRating(e.target.value) }}/>
                        </div>
                        <div>
                            <label htmlFor="reviewTitle" className="pt-5 block mb-2 text-sm font-medium text-white">Title of review</label>
                            <input type="text" id="reviewTitle" className="block p-3 w-full text-sm text-white bg-mute-black rounded-lg border border-white shadow-sm focus:ring-basically-white focus:border-basically-white" placeholder="Give a brief description of your review" required onChange={e => { setReviewTitle(e.target.value) }}/>
                        </div>
                        <div className="pt-5 pb-5">
                            <label htmlFor="reviewComment" className="block mb-2 text-sm font-medium text-white">Review contents</label>
                            <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-white bg-mute-black rounded-lg shadow-sm border border-white focus:ring-basically-white focus:border-basically-white" placeholder="Write your review..." onChange={e => { setReviewComment(e.target.value) }}></textarea>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-mute-black rounded-lg focus:ring-4 focus:ring-basically-white hover:text-basically-white">
                            Post review
                        </button>
                    </form>

                    {novel.reviews.map(r => (<article key={r.id} className="pt-10">
                        <div className="bg-mute-black rounded-lg py-4">
                            <div className="flex items-center mb-4">
                                <Image className="w-10 h-10 mx-4 rounded-full" src="/no-pfp.ico" alt="" width="20" height="20" />
                                <div className="space-y-1 font-medium text-white">
                                    <p>{r.user.username}</p>
                                    {r.user.roles.map(role => (<span key={role.id} style={{backgroundColor: role.color}} className="inline-flex items-center text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">{role.title}</span>))}
                                </div>
                            </div>
                            <div className="flex items-center ml-4 mr-4 mb-2">
                                <StarRating count={r.rating} />
                                <h3 className="ml-2 text-sm font-semibold text-white">{r.title}</h3>
                            </div>
                            <p className="ml-4 mr-4 text-white">{r.comment}</p>
                        </div>
                    </article>))}
                </div>
            </div>
        </>
    );
}
