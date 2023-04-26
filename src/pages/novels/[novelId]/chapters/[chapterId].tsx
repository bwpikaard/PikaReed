import axios from "axios";
import {format} from "date-fns";
import Image from "next/image";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import type {FormEvent, ReactElement} from "react";
import {useState} from "react";
import useSWR from "swr";

import type {Novel} from "../../../../entities/novel.entity";
import type {NovelChapter as NovelChapterEntity} from "../../../../entities/novel-chapter.entity";
import {fetcher} from "../../../../lib/swrFetcher";

export default function NovelChapter(): ReactElement {
    const session = useSession();
    const router = useRouter();
    const {novelId, chapterId} = router.query;
    const [comment, setComment] = useState<string>();
    const [suggestion, setSuggestion] = useState<string>();

    const {data: novel, error: novelError} = useSWR<Novel, Error>(() => `/api/novels/${novelId}`, fetcher);
    const {
        data: chapter, error: chapterError, mutate: mutateChapter,
    } = useSWR<NovelChapterEntity, Error>(() => `/api/chapters/${chapterId}`, fetcher);
    
    if (!session?.data?.user || !novel || novelError || !chapter || chapterError) return <div>Loading...</div>;

    const chapters = novel.chapters.sort((a, b) => a.chapterNumber - b.chapterNumber);
    const currentIndex = chapters.findIndex(c => c.id === chapter.id);
    const hasPrevious = currentIndex > 0;
    const hasNext = currentIndex < novel.chapters.length - 1;

    const goPrevious = async (): Promise<void> => {
        await router.push(`/novels/${novelId}/chapters/${chapters[currentIndex - 1].id}`);
    };
    const goNext = async (): Promise<void> => {
        await router.push(`/novels/${novelId}/chapters/${chapters[currentIndex + 1].id}`);
    };

    const handleCommentSubmit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();

        if (!comment?.length) {
            alert("Missing/invalid field");
            return;
        }

        await axios.post(`/api/chapters/${chapterId}/comments`, {comment}).then(() => { mutateChapter() })
            .catch(() => { alert("Error") });
    };

    const handleSuggestionSubmit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();

        if (!suggestion?.length) {
            alert("Missing/invalid field");
            return;
        }

        await axios.post(`/api/chapters/${chapterId}/suggestions`, {comment: suggestion}).then(() => { mutateChapter();alert("Posted suggestion") })
            .catch(() => { alert("Error") });
    };

    // pointer-events-none for className to disable

    const enabledButtonClass = "inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-white bg-mute-black rounded-lg hover:text-basically-white";
    const disabledButtonClass = `pointer-events-none bg-mute-grey ${enabledButtonClass}`;

    return (
        <>
            <div className="pt-10 flex justify-center">
                <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Chapter {chapter.chapterNumber}: {chapter.title}</h1>
            </div>
            
            <div className="grid grid-cols-7 pt-10">
                <div className="col-start-2 col-span-5 pb-5 flex justify-between items-center">
                    <button onClick={goPrevious} className={hasPrevious ? enabledButtonClass : disabledButtonClass}>
                        <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                        Previous
                    </button>
                    <button onClick={goNext} className={hasNext ? enabledButtonClass : disabledButtonClass}>
                        Next
                        <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>

                <div className="col-start-2 col-span-5 bg-mute-black rounded-lg">
                    <div className="m-5 text-white">
                        <p dangerouslySetInnerHTML={{__html: chapter.htmlBody}} />
                    </div>
                </div>

                <div className="col-start-2 col-span-5 pt-5 flex justify-between items-center">
                    <button onClick={goPrevious} className={hasPrevious ? enabledButtonClass : disabledButtonClass}>
                        <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                        Previous
                    </button>
                    <button onClick={goNext} className={hasNext ? enabledButtonClass : disabledButtonClass}>
                        Next
                        <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>

                <div className="col-start-2 col-span-5">
                    <section className="py-8">
                        <div className="min-w-full max-w-fit mx-auto px-4">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg lg:text-2xl font-bold text-white">Suggestions</h2>
                            </div>
                            <form className="mb-6" onSubmit={handleSuggestionSubmit}>
                                <div className="py-2 px-4 mb-4 bg-mute-black rounded-lg rounded-t-lg border border-white">
                                    <label htmlFor="comment" className="sr-only">Your suggestion</label>
                                    <textarea id="comment" rows={6}
                                        className="px-0 w-full text-sm text-white border-0 focus:ring-0 focus:outline-none bg-mute-black"
                                        placeholder="Write a comment..." required onChange={e => { setSuggestion(e.target.value) }}>
                                    </textarea>
                                </div>
                                <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-mute-black rounded-lg focus:ring-4 focus:ring-basically-white hover:text-basically-white">
                                    Post suggestion
                                </button>
                            </form>
                        </div>
                    </section>
                </div>

                <div className="col-start-2 col-span-5">
                    <section className="py-8">
                        <div className="min-w-full max-w-fit mx-auto px-4">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg lg:text-2xl font-bold text-white">Comments</h2>
                            </div>
                            <form className="mb-6" onSubmit={handleCommentSubmit}>
                                <div className="py-2 px-4 mb-4 bg-mute-black rounded-lg rounded-t-lg border border-white">
                                    <label htmlFor="comment" className="sr-only">Your comment</label>
                                    <textarea id="comment" rows={6}
                                        className="px-0 w-full text-sm text-white border-0 focus:ring-0 focus:outline-none bg-mute-black"
                                        placeholder="Write a comment..." required onChange={e => { setComment(e.target.value) }}>
                                    </textarea>
                                </div>
                                <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-mute-black rounded-lg focus:ring-4 focus:ring-basically-white hover:text-basically-white">
                                    Post comment
                                </button>
                            </form>
                            {chapter.comments.map(c => (
                                <article className="p-6 mb-6 text-base bg-mute-black rounded-lg" key={c.id}>
                                    <footer className="flex justify-between items-center mb-2">
                                        <div className="flex items-center">
                                            <p className="inline-flex items-center mr-3 text-sm text-white"><Image
                                                className="mr-2 w-10 h-10 rounded-full"
                                                src="/no-pfp.ico"
                                                alt="Michael Gough"
                                                width="20" height="20"/>{c.user.username}</p>
                                            {c.user.roles.map(r => (<span key={r.id} style={{backgroundColor: r.color}} className="inline-flex items-center text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                                {r.title}
                                            </span>))}
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
            </div>
        </>
    );
}
