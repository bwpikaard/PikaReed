import "quill/dist/quill.snow.css";

import type {ReactElement} from "react";
import React from "react";
import {useQuill} from "react-quilljs";

export default function Write(): ReactElement {
    const {quill, quillRef} = useQuill();

    const sendQuillText = (): void => {
        alert(quillRef.current.firstChild.innerHTML);
    };

    React.useEffect(() => {
        if (quill) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            quill.clipboard.dangerouslyPasteHTML("<p>Write a chapter...</p>");
        }
    }, [quill]);

    return (
        <div className="">
            <div className="pt-10">
                <div style={{height: 500}}>
                    <div ref={quillRef} />
                </div>
            </div>
            <div className="pt-20">
                <button type="submit" onClick={sendQuillText} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish Chapter
                </button>
            </div>
        </div>
    );
}
