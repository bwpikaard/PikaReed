import Image from "next/image";
import Link from "next/link";
import type {ReactElement} from "react";

export default function NovelHomepage(): ReactElement {
    return (
        <>
            <div className="py-10 grid grid-cols-5 gap-10">
                <div className="col-span-1">
                    <Image className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </div>

                { /* Title, recorded data for novel, description */ }
                <div className="col-span-3 bg-mute-black rounded-lg">
                    <h2 className="pt-8 mb-4 text-4xl tracking-tight font-extrabold text-white ml-4 mr-4">Charlie and the Chocolate Factory</h2>
                        
                    <div className="flex items-center pt-5 ml-4 mr-4">
                        <p className="pr-8 text-white">XXXX Views</p>
                        <p className="pr-8 text-white">XXXX Follows</p>
                        <p className="pr-8 text-white">XXXX Chapters</p>
                    </div>
                    
                    <div className="flex items-center pt-5 ml-4 mr-4">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="ml-2 text-sm font-medium text-white">4.95 out of 5</p>
                    </div>

                    <div className="pt-5 text-white ml-4 mr-4">
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
            </div>

            { /* Novels chapters and tags (tags directly under novel cover so chapters are in line with novel data) */ }
            <div className="grid grid-cols-5 gap-10">
                <div className="col-span-1">
                    <div className="flex flex-wrap">
                        <span className="bg-mute-black text-white text-md font-medium mt-2 mr-2 px-4 py-1 rounded">Action</span>
                        <span className="bg-mute-black text-white text-md font-medium mt-2 mr-2 px-4 py-1 rounded">Adventure</span>
                        <span className="bg-mute-black text-white text-md font-medium mt-2 mr-2 px-4 py-1 rounded">Horror</span>
                        <span className="bg-mute-black text-white text-md font-medium mt-2 mr-2 px-4 py-1 rounded">Thriller</span>
                        <span className="bg-mute-black text-white text-md font-medium mt-2 mr-2 px-4 py-1 rounded">Mystery</span>
                        <span className="bg-mute-black text-white text-md font-medium mt-2 mr-2 px-4 py-1 rounded">Sci-Fi</span>
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
                            <tr className="bg-mute-grey border-b border-mute-black text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-basically-white">
                                    <Link href="#">c1 : The Factory</Link>
                                </th>
                                <td className="px-6 py-4 ">
                                    02/11/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input defaultChecked id="checkbox-1" type="checkbox" value="" className="ml-6 w-4 h-4 text-greyish bg-white border-white rounded focus:ring-basically-white focus:ring-2" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-mute-grey border-b border-mute-black text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-basically-white">
                                    <Link href="#">c2</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/16/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-greyish bg-white border-white rounded focus:ring-basically-white focus:ring-2" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-mute-grey border-b border-mute-black text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-basically-white">
                                    <Link href="#">c3</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/15/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-greyish bg-white border-white rounded focus:ring-basically-white focus:ring-2" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-mute-grey border-b border-mute-black text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-basically-white">
                                    <Link href="#">c4</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/11/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-greyish bg-white border-white rounded focus:ring-basically-white focus:ring-2" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-mute-grey border-b border-mute-black text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-basically-white">
                                    <Link href="#">c5</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/16/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-greyish bg-white border-white rounded focus:ring-basically-white focus:ring-2" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-mute-grey border-b border-mute-black text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-basically-white">
                                    <Link href="#">c6</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/15/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-greyish bg-white border-white rounded focus:ring-basically-white focus:ring-2" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-mute-grey border-b border-mute-black text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-basically-white">
                                    <Link href="#">c7</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/11/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-greyish bg-white border-white rounded focus:ring-basically-white focus:ring-2" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-mute-grey border-b border-mute-black text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-basically-white">
                                    <Link href="#">c8</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/16/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-greyish bg-white border-white rounded focus:ring-basically-white focus:ring-2" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-mute-grey border-b border-mute-black text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-basically-white">
                                    <Link href="#">c9</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/15/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-greyish bg-white border-white rounded focus:ring-basically-white focus:ring-2" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-mute-grey border-b border-mute-black text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-basically-white">
                                    <Link href="#">c10</Link>
                                </th>
                                <td className="px-6 py-4">
                                    02/11/2018
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-2" type="checkbox" value="" className="ml-6 w-4 h-4 text-greyish bg-white border-white rounded focus:ring-basically-white focus:ring-2" />
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
                    <p className="block mb-2 text-sm font-medium text-white">Novel Rating</p>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                    <div>
                        <label htmlFor="subject" className="pt-5 block mb-2 text-sm font-medium text-white">Title of review</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-white bg-mute-black rounded-lg border border-white shadow-sm focus:ring-basically-white focus:border-basically-white" placeholder="Give a brief description of your review" required />
                    </div>
                    <div className="pt-5 pb-5">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Review contents</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-white bg-mute-black rounded-lg shadow-sm border border-white focus:ring-basically-white focus:border-basically-white" placeholder="Write your review..."></textarea>
                    </div>
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-mute-black rounded-lg focus:ring-4 focus:ring-basically-white hover:text-basically-white">
                        Post review
                    </button>
                    <article className="pt-10">
                        <div className="bg-mute-black rounded-lg py-4">
                            <div className="flex items-center mb-4">
                                <Image className="w-10 h-10 mx-4 rounded-full" src="/no-pfp.ico" alt="" width="20" height="20" />
                                <div className="space-y-1 font-medium text-white">
                                    <p>Jese Leos</p>
                                </div>
                            </div>
                            <div className="flex items-center ml-4 mr-4 mb-2">
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <h3 className="ml-2 text-sm font-semibold text-white">Thinking to buy another one!</h3>
                            </div>
                            <p className="ml-4 mr-4 text-white">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}
