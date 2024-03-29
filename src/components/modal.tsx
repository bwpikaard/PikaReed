import type {ReactElement, ReactNode} from "react";
import React from "react";

export default function Modal({
    displayName, children,
}: {
    displayName: string;
    children: ReactNode;
}): ReactElement {
    return (
        <>
            {/* Modal toggle */}
            <button data-modal-target={displayName} data-modal-toggle={displayName} className="" type="button">
                {displayName}
            </button>
            {/* Main modal */}
            <div id={displayName} tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative w-full h-full max-w-2xl md:h-auto">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-start justify-between p-4 border-b border-basically-white rounded-t bg-mute-black dark:border-gray-600">
                            <h3 className="text-xl font-semibold content-center">
                                {displayName}
                            </h3>
                            <button type="button" className="text-white bg-transparent hover:bg-greyish hover:text-basically-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide={displayName}>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-6 space-y-6 bg-greyish">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
