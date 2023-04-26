import "quill/dist/quill.snow.css";

import axios from "axios";
import {format} from "date-fns";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import type {FormEvent, ReactElement} from "react";
import {useEffect, useState} from "react";
import {useQuill} from "react-quilljs";
import useSWR from "swr";

import type {Novel} from "../../../../../entities/novel.entity";
import type {NovelChapter} from "../../../../../entities/novel-chapter.entity";
import {fetcher} from "../../../../../lib/swrFetcher";

export default function UserNovelChapter(): ReactElement {
    const session = useSession();
    const router = useRouter();
    const {novelId, chapterId} = router.query;

    const {data: novel, error: novelError} = useSWR<Novel, Error>(() => `/api/novels/${novelId}`, fetcher);
    const {data: chapter, error: chapterError} = useSWR<NovelChapter, Error>(() => `/api/chapters/${chapterId}`, fetcher);

    const {quill, quillRef} = useQuill();
    useEffect(() => {
        if (!chapter) return;
        quill?.clipboard.dangerouslyPasteHTML(chapter.htmlBody);
    }, [quill, chapter]);

    const [title, setTitle] = useState<string>();
    
    useEffect(() => {
        if (!chapter) return;
        if (title === undefined) setTitle(chapter.title);
    }, [chapter, title]);

    if (!session?.data?.user || !novel || novelError || !chapter || chapterError) return <div>Loading...</div>;

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();

        if (!title || !quillRef?.current.firstChild.innerHTML?.length) { alert("Bad input");return }

        axios.patch(`/api/chapters/${chapterId}`, {
            title: title,
            htmlBody: quillRef.current.firstChild.innerHTML as string,
        }).then(() => { alert("Done") })
            .catch(() => { alert("Error") });
    };

    return (
        <>
            <form className="pt-10" onSubmit={handleSubmit}>
                <div className="pb-5">
                    <label htmlFor="title" className="pt-5 block mb-2 text-sm font-medium text-white">Title of Chapter {chapter.chapterNumber}</label>
                    <input type="text" id="title" className="block p-3 w-full text-sm text-white bg-mute-black rounded-lg border border-white shadow-sm focus:ring-basically-white focus:border-basically-white" placeholder="Give a title for your chapter" required value={title} onChange={e => { setTitle(e.target.value) }}/>
                </div>

                <div className="bg-mute-black text-white pb-10">
                    <div style={{height: 500}}>
                        <div ref={quillRef} />
                    </div>
                </div>
                <div className="pt-10">
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-mute-black rounded-lg focus:ring-4 focus:ring-basically-white hover:text-basically-white">
                    Update Chapter
                    </button>
                </div>
            </form>
            <div className="col-start-2 col-span-5">
                <section className="py-8">
                    <div className="min-w-full max-w-fit mx-auto px-4">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg lg:text-2xl font-bold text-white">Suggestions</h2>
                        </div>
                        {chapter.suggestions.map(c => (
                            <article className="p-6 mb-6 text-base bg-mute-black rounded-lg" key={c.id}>
                                <footer className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <p className="inline-flex items-center mr-3 text-sm text-white">{c.user.username}</p>
                                        <p className="text-sm text-white"><time dateTime="2022-02-08"
                                            title="February 8th, 2022">{format(Date.parse(c.createdAt as unknown as string), "do MMMM Y")}</time></p>
                                    </div>
                                </footer>
                                <p className="text-white">{c.comment}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
