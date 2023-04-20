import {Carousel} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import type {ReactElement} from "react";

function tableRows(): ReactElement {
    // eslint-disable-next-line no-undef
    const rows: JSX.Element[] = [];
    for (let i = 0;i < 10;i++) {
        const oneRow = <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link href="/novel-homepage">Charlie and the Chocolate Factory</Link>
            </th>
            <td className="px-6 py-4">
                <Link href="/novel-chapter">{`c${10 - i}`}</Link>
            </td>
            <td className="px-6 py-4">
            Roald Dahl
            </td>
            <td className="px-6 py-4">
            192
            </td>
        </tr>;
        rows.push(oneRow);
    }
    return <tbody>{rows}</tbody>;
}

function carouselImages(): ReactElement {
    // eslint-disable-next-line no-undef
    const images: JSX.Element[] = [];
    for (let i = 0;i < 5;i++) {
        const oneImage = <Link href="/novel-homepage">
            <div className="flex h-full bg-gray-600 dark:bg-gray-800 dark:text-white grid grid-cols-5">
                <Image className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />

                <div className="col-start-2 col-span-3 pt-8">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Charlie and the Chocolate Factory</h2>
    
                    <div className="flex items-center pt-5">
                        <p className="pr-8 text-white">XXXX Views</p>
                        <p className="pr-8 text-white">XXXX Follows</p>
                        <p className="pr-8 text-white">XXXX Chapters</p>
                    </div>

                    <div className="flex items-center pt-5">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="ml-2 text-sm font-medium text-white dark:text-gray-400">4.95 out of 5</p>
                    </div>

                    <div className="pt-5 text-white">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a dictum tellus. Pellentesque a magna eget sapien fermentum tincidunt sed
                        vitae tortor. Maecenas bibendum vestibulum augue, non mollis mi gravida vel. Quisque at rutrum nulla. Nullam vehicula erat vel venenatis
                        condimentum. Sed metus ipsum, pellentesque id ligula quis, porttitor malesuada sem. Phasellus ac euismod ipsum. Aenean hendrerit
                        dictum sem id condimentum. Mauris auctor magna sed luctus efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
                        quam facilisis, sollicitudin nulla quis, commodo libero. Donec tincidunt risus libero, non varius ante elementum eu. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>

                <div className="col-span-1 pt-8">
                    <div className="flex flex-wrap">
                        <span className="bg-gray-100 text-gray-800 text-md font-medium mt-2 mr-2 px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">Action</span>
                        <span className="bg-gray-100 text-gray-800 text-md font-medium mt-2 mr-2 px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">Adventure</span>
                        <span className="bg-gray-100 text-gray-800 text-md font-medium mt-2 mr-2 px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">Horror</span>
                        <span className="bg-gray-100 text-gray-800 text-md font-medium mt-2 mr-2 px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">Thriller</span>
                        <span className="bg-gray-100 text-gray-800 text-md font-medium mt-2 mr-2 px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">Mystery</span>
                        <span className="bg-gray-100 text-gray-800 text-md font-medium mt-2 mr-2 px-4 py-1 rounded dark:bg-gray-700 dark:text-gray-300">Sci-Fi</span>
                    </div>
                </div>
            </div>
        </Link>;
        images.push(oneImage);
    }
    return <Carousel slideInterval={5000}>{images}</Carousel>;
}

export default function Home(): ReactElement {
    return (
        <>
            <div className="pt-10">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    {carouselImages()}
                </div>
            </div>

            <div className="pt-10">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Chapter
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Author
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Pages
                                </th>
                            </tr>
                        </thead>
                        {tableRows()}
                    </table>
                </div>
            </div>
            
        </>
    );
}
