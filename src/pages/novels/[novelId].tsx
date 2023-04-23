import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import type {ReactElement} from "react";
import useSWR from "swr";

import type {Novel} from "../../entities/novel.entity";
import {fetcher} from "../../lib/swrFetcher";

export default function NovelHomepage(): ReactElement {
    const router = useRouter();
    const {novelId} = router.query;
    const {data: novel, error: novelError} = useSWR<Novel, Error>(() => `/api/novels/${novelId}`, fetcher);
    
    if (!novel || novelError) return <div>Loading...</div>;

    /* Pass in a number and a five stars will be returned, the number of stars that are yellow depend on the passed in number */
    const starRating = (count): JSX.Element => {
        const stars: JSX.Element[] = [];
        const filledStar = <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Filled star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>;
        const emptyStar = <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Empty star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>;
        
        let roundedCount = count % 1;
        if (roundedCount >= 0.5) {
            roundedCount = count - roundedCount + 1;
        } else {
            roundedCount = count - roundedCount;
        }
        
        for (let i = 0;i < roundedCount;i++) {
            stars.push(filledStar);
        }
        for (let i = roundedCount;i < 5;i++) {
            stars.push(emptyStar);
        }
    
        return <>{stars}</>;
    };

    /* !!UNFINISHED!! Should theoretically run through each review on a novel and then return them as a list */
    const reviews: JSX.Element[] = [];
    const reviewsList = (): JSX.Element => {
        const userReview = <article className="pt-10">
            <div className="flex items-center mb-4 space-x-4">
                <Image className="w-10 h-10 rounded-full" src="/no-pfp.ico" alt="User profile picture" width="20" height="20" />
                <div className="space-y-1 font-medium dark:text-white">
                    <p>Jese Leos</p>
                </div>
                <div className="flex items-center">
                    {starRating(2)}
                </div>
            </div>
            <p className="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
        </article>;
        return <>{userReview}</>;
    };
    
    /* !!UNFINISHED!! Should theoretically go through each chapter and return them as a list.
    Will need to handle the bookmarked chapter seperately, as well as the event of the bookmark changing */
    const chapters: JSX.Element[] = [];
    const chaptersList = (): JSX.Element => {
        const singleChapter = <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link href="#">c1 : The Factory</Link>
            </th>
            <td className="px-6 py-4">
                02/11/2018
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    <input defaultChecked id="checkbox-1" type="checkbox" value="" className="ml-6 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
            </td>
        </tr>;
        return <>{singleChapter}</>;
    };

    /* Cycles through the tags on a novel and returns them as a list */
    const tagList: JSX.Element[] = [];
    novel.tags.forEach(data => {
        tagList.push(<span className="bg-gray-100 text-gray-800 text-md font-medium mt-2 mr-2 px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">{data[0]}</span>);
    });
    
    return (
        <>
            <div className="py-10 grid grid-cols-5 gap-10">
                <div className="col-span-1">
                    <Image className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </div>

                { /* Title, recorded data for novel, description */ }
                <div className="col-span-3">
                    <h2 className="pt-8 mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{novel.title}</h2>
                        
                    <div className="flex items-center pt-5">
                        <p className="pr-8">XXXX Views</p>
                        <p className="pr-8">XXXX Follows</p>
                        <p className="pr-8">XXXX Chapters</p>
                    </div>
                    
                    <div className="flex items-center pt-5">
                        {starRating(5)}
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
                    </div>

                    <div className="pt-5">
                        <p>{novel.synopsis}</p>
                    </div>
                </div>
            </div>

            { /* Novels chapters and tags (tags directly under novel cover so chapters are in line with novel data) */ }
            <div className="grid grid-cols-5 gap-10">
                <div className="col-span-1">
                    <div className="flex flex-wrap">
                        {tagList}
                    </div>
                </div>

                <div className="col-span-3 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link href="#">c1 : The Factory</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/11/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input defaultChecked id="checkbox-1" type="checkbox" value="" className="ml-6 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link href="#">c2</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/16/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link href="#">c3</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/15/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link href="#">c4</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/11/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link href="#">c5</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/16/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link href="#">c6</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/15/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link href="#">c7</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/11/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link href="#">c8</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/16/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link href="#">c9</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/15/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link href="#">c10</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/11/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            { /* Novel reviews */ }
            <div className="grid grid-cols-5 gap-10 py-10">
                <div className="col-span-3 col-start-2">
                    <div className="pb-2">
                        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rate the novel</label>
                        <div className="flex items-center ">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Empty star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Empty star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Empty star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Empty star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Empty star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title of review</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Give a brief description of your review" required />
                    </div>
                    <div className="pt-2 pb-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Review contents</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write your review..."></textarea>
                    </div>
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Post review
                    </button>
                    {reviewsList()}
                </div>
            </div>
        </>
    );
}
