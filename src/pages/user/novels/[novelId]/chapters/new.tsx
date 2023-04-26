import "quill/dist/quill.snow.css";

import axios from "axios";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import type {FormEvent, ReactElement} from "react";
import {useState} from "react";
import {useQuill} from "react-quilljs";
import useSWR from "swr";

import type {Novel} from "../../../../../entities/novel.entity";
import {fetcher} from "../../../../../lib/swrFetcher";

export default function UserNovelNewChapter(): ReactElement {
    const session = useSession();
    const router = useRouter();
    const {novelId} = router.query;

    const {data: novel, error: novelError} = useSWR<Novel, Error>(() => `/api/novels/${novelId}`, fetcher);

    const {quill, quillRef} = useQuill();
    const [title, setTitle] = useState<string>();
    const [chapterNumber, setChapterNumber] = useState<string>();

    if (!session?.data?.user || !novel || novelError) return <div>Loading...</div>;

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();

        if (!title || !chapterNumber || !quillRef?.current.firstChild.innerHTML?.length) { alert("Bad input");return }

        axios.post(`/api/chapters`, {
            novelId: Number(novelId),
            chapterNumber: Number(chapterNumber),
            title: title,
            htmlBody: quillRef.current.firstChild.innerHTML as string,
        }).then(async () => { await router.push(`/user/novels/${novelId}`) })
            .catch(() => { alert("Error") });
    };

    return (
        <form className="pt-10" onSubmit={handleSubmit}>
            <div className="pb-5">
                <label htmlFor="title" className="pt-5 block mb-2 text-sm font-medium text-white">Title of Chapter</label>
                <input type="text" id="title" className="block p-3 w-full text-sm text-white bg-mute-black rounded-lg border border-white shadow-sm focus:ring-basically-white focus:border-basically-white" placeholder="Give a title for your chapter" required onChange={e => { setTitle(e.target.value) }}/>
            </div>

            <div className="pb-5">
                <label htmlFor="chapterNumber" className="pt-5 block mb-2 text-sm font-medium text-white">Chapter Number</label>
                <input type="number" id="chapterNumber" className="block p-3 w-full text-sm text-white bg-mute-black rounded-lg border border-white shadow-sm focus:ring-basically-white focus:border-basically-white" placeholder="1" required onChange={e => { setChapterNumber(e.target.value) }}/>
            </div>

            <div className="bg-mute-black text-white pb-10">
                <div style={{height: 500}}>
                    <div ref={quillRef} />
                </div>
            </div>
            <div className="pt-10">
                <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-mute-black rounded-lg focus:ring-4 focus:ring-basically-white hover:text-basically-white">
                    Create Chapter
                </button>
            </div>
        </form>
    );
}
