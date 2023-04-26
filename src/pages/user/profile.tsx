import type {ReactElement} from "react";
import React, {
    useState,
} from "react";

import MyComments from "../../components/profile-tabs/my-comments";
import MyNovels from "../../components/profile-tabs/my-novels";
import MyReviews from "../../components/profile-tabs/my-reviews";

export default function Profile(): ReactElement {
    const [check, setPage] = useState<"com" | "nov" | "rev">("nov");

    const commentsDisplay = (): void => {
        setPage("com");
    };

    const novelsDisplay = (): void => {
        setPage("nov");
    };

    const reviewsDispaly = (): void => {
        setPage("rev");
    };

    return (
        <>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-white rounded-lg md:hidden hover:text-basically-white focus:outline-none focus:ring-2 focus:ring-basically-white">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <div className="grid grid-cols-12">
                <aside id="default-sidebar" className="self-start col-span-1 top-0 left-0 z-40 w-52 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-mute-black rounded-b-lg">
                        <ul className="space-y-2">
                            <li>
                                <button onClick={commentsDisplay} className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:text-basically-white">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                    <span className="ml-3">My Comments</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={novelsDisplay} className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:text-basically-white">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">My Novels</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={reviewsDispaly} className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:text-basically-white">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">My Reviews</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>
            
                <div className="sm:ml-32 col-span-11">
                    {check === "com" && <MyComments />}
                    {check === "nov" && <MyNovels />}
                    {check === "rev" && <MyReviews />}
                </div>
            </div>
        </>
    );
}
