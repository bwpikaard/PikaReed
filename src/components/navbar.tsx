import {Dropdown} from "flowbite";
import Image from "next/image";
import Link from "next/link";
import {
    signIn, signOut, useSession,
} from "next-auth/react";
import type {ReactElement} from "react";
import {
    createRef, useEffect, useState,
} from "react";

export default function Navbar(): ReactElement {
    const {data: session} = useSession();
    const [dropdown, setDropdown] = useState<Dropdown>();

    const avaDropRef = createRef<HTMLDivElement>();
    const avaDropButtonRef = createRef<HTMLButtonElement>();
    
    useEffect(() => {
        if (!session?.user || !avaDropRef || !avaDropButtonRef || dropdown) return;

        setDropdown(new Dropdown(avaDropRef.current, avaDropButtonRef.current, {}));
    }, [avaDropRef, avaDropButtonRef, dropdown, session?.user]);

    return (<nav className="bg-mute-black px-2 sm:px-4 py-2.5 shadow ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link href="/" className="flex items-center">
                <Image
                    src="/pikareed-logo.ico"
                    className="mr-3 h-6 sm:h-9"
                    alt="PikaReed Logo"
                    height="36"
                    width="24"
                />
                <span className="text-white text-center self-center text-4xl tracking-tight font-extrabold whitespace-nowrap">PikaReed</span>
            </Link>
            <div className="flex items-center md:order-2">
                <form className="">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="text-white block w-96 p-4 pl-10 text-sm border border-greyish rounded-lg bg-mute-grey focus:ring-basically-white focus:border-blue-500 placeholder-white" placeholder="Search by Novel..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-greyish hover:text-basically-white focus:ring-4 focus:outline-none focus:ring-basically-white font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>
                {session?.user
                    ? <>
                            <button ref={avaDropButtonRef} id="dropdownAvatarNameButton" data-dropdown-toggle="user-dropdown" className="pl-4 flex items-center text-sm font-medium text-white rounded-full hover:text-basically-white md:mr-0" type="button">
                                <span className="sr-only">Open user menu</span>
                                <Image
                                    src={session?.user.image ?? "/no-pfp.ico"}
                                    className="rounded-full mr-2"
                                    alt="Open user menu"
                                    height="36"
                                    width="36"
                                />
                                {session?.user.name}
                                <svg className="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                            <div ref={avaDropRef} className="z-50 hidden my-4 text-base list-none bg-mute-black divide-y divide-gray-100 rounded-lg shadow border border-greyish" id="user-dropdown">
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-white">{session?.user.name}</span>
                                    <span className="block text-sm font-medium text-white truncate">{session?.user.email}</span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <Link href="/user/profile" className="block px-4 py-2 text-sm text-white hover:text-basically-white">Profile</Link>
                                    </li>
                                    <li>
                                        <Link href="/user/bookshelf" className="block px-4 py-2 text-sm text-white hover:text-basically-white">Bookshelf</Link>
                                    </li>
                                    <li>
                                        <Link href="/user/settings" className="block px-4 py-2 text-sm text-white hover:text-basically-white">Settings</Link>
                                    </li>
                                </ul>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/explicit-function-return-type */}
                                        <a href="#" onClick={async () => signOut()} className="block px-4 py-2 text-sm text-white hover:text-basically-white">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </>
                    : <>
                            <div className="items-center justify-between w-full md:flex md:w-auto md:order-1 pl-4">
                                <ul className="flex flex-col p-1 bg-mute-black rounded-lg border-l border-r border-greyish md:p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                    <li>
                                        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/explicit-function-return-type */}
                                        <a href="#" onClick={async () => signIn()} className="block py-2 pl-3 pr-4 text-white rounded hover:text-basically-white md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign In</a>
                                    </li>
                                </ul>
                            </div>
                        </>}
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                <ul className="flex flex-col p-4 mt-4 border-l border-r border-greyish rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <Link href="/" className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent hover:text-basically-white md:p-0">Home</Link>
                    </li>
                    <li>
                        <Link href="/explore/top-ranked" id="exploreDropdownButton" data-dropdown-toggle="exploreDropdown" data-dropdown-trigger="hover" className="block text-center inline-flex items-center py-2 pl-3 pr-4 text-white rounded hover:text-basically-white md:hover:bg-transparent md:p-0">
                            Explore <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </Link>
                        <div id="exploreDropdown" className="z-50 hidden border border-greyish bg-mute-black divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul className="py-2 text-sm text-white" aria-labelledby="exploreDropdownButton">
                                <li>
                                    <Link href="/explore/top-ranked" className="block px-4 py-2 hover:text-basically-white">Top Ranked</Link>
                                </li>
                                <li>
                                    <Link href="/explore/library" className="block px-4 py-2 hover:text-basically-white">Library</Link>
                                </li>
                                <li>
                                    <Link href="/explore/random" className="block px-4 py-2 hover:text-basically-white">Random</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="/write" className="block py-2 pl-3 pr-4 text-white rounded hover:text-basically-white md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Write</Link>
                    </li>
                    <li>
                        <Link href="/resources" className="block py-2 pl-3 pr-4 text-white rounded hover:text-basically-white md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resources</Link>
                    </li>
                    <li>
                        <Link href="/feedback" className="block py-2 pl-3 pr-4 text-white rounded hover:text-basically-white md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Feedback</Link>
                    </li>
                    {session?.user.actions.includes("READ_FEEDBACK")
                        ?   <li>
                                <Link href="/feedback-list" className="block py-2 pl-3 pr-4 text-white rounded hover:text-basically-white md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Feedback List</Link>
                            </li>
                        : <></>
                    }
                    
                </ul>
            </div>
        </div>
    </nav>);
}
