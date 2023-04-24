import type {ReactElement} from "react";
import React, {
    useState,
} from "react";

import ChangeAvatar from "../../components/change-settings/change-avatar";
import ChangeEmail from "../../components/change-settings/change-email";
import ChangePassword from "../../components/change-settings/change-password";
import ChangeUsername from "../../components/change-settings/change-username";
import GeneralSettings from "../../components/change-settings/general-settings";

export default function Settings(): ReactElement {

    const [check, setPage] = useState<"avt" | "eml" | "psw" | "set" | "usr">();
    
    if (check === undefined) {
        setPage("set");
    }

    const avatarDisplay = (): void => {
        setPage("avt");
    };

    const settingsDisplay = (): void => {
        setPage("set");
    };

    const emailDispaly = (): void => {
        setPage("eml");
    };

    const passwordDisplay = (): void => {
        setPage("psw");
    };

    const usernameDisplay = (): void => {
        setPage("usr");
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
                    <div className="h-full px-3 py-4 overflow-y-auto bg-mute-black">
                        <ul className="space-y-2">
                            <li>
                                <button onClick={settingsDisplay} className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:text-basically-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                    </svg>
                                    <span className="ml-3">General Settings</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={avatarDisplay} className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:text-basically-white">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Avatar</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={emailDispaly} className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:text-basically-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Change Email</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={usernameDisplay} className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:text-basically-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Change Username</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={passwordDisplay} className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:text-basically-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Change Password</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>
            
                <div className="sm:ml-32 col-start-3 col-span-6">
                    {check === "set" && <GeneralSettings />}
                    {check === "avt" && <ChangeAvatar />}
                    {check === "psw" && <ChangePassword />}
                    {check === "usr" && <ChangeUsername />}
                    {check === "eml" && <ChangeEmail />}
                </div>
            </div>
        </>
    );
}
