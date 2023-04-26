import axios from "axios";
import {useSession} from "next-auth/react";
import type {FormEvent, ReactElement} from "react";
import {useState} from "react";

export default function CreateNovel(): ReactElement {
    const session = useSession();
    const [title, setTitle] = useState<string>();
    const [synopsis, setSynopsis] = useState<string>();
    const [tags, setTags] = useState<string>();

    if (!session?.data?.user) return <div>Loading...</div>;

    const handleSubmit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();

        if (!title?.length || !synopsis?.length || !tags?.length) {
            alert("Missing a field");
            return;
        }

        await axios.post("/api/novels", {
            title: title, synopsis: synopsis, tags: tags,
        }).then(() => { alert("Done") })
            .catch(() => { alert("Error") });
    };

    return (
        <>
            <form className="grid grid-cols-4" onSubmit={handleSubmit}>
                <div className="col-span-2 col-start-2 pt-10">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-white">Title</label>
                    <input type="text" id="title" className="block p-3 w-full text-sm text-white bg-mute-black rounded-lg border border-white shadow-sm focus:ring-basically-white focus:border-basically-white" placeholder="Let us know how we can help you" required onChange={e => { setTitle(e.target.value) }} />
                </div>
                <div className="col-span-2 col-start-2 pt-5">
                    <label htmlFor="synopsis" className="block mb-2 text-sm font-medium text-white">Description</label>
                    <textarea id="synopsis" rows={6} className="block p-2.5 w-full text-sm text-white bg-mute-black rounded-lg shadow-sm border border-white focus:ring-basically-white focus:border-basically-white" placeholder="Write a description for your novel..." onChange={e => { setSynopsis(e.target.value) }}></textarea>
                </div>
                <div className="col-span-2 col-start-2 pt-5 text-white">
                    Available Tags: <br/>
                    Action | Adventure | Horror | Mystery | Sci-Fi | Thriller | Non-Fiction | Fantasy <br/>
                    Seperate all tags with a comma and no spaces. Ex: Action,Adventure,Mystery
                </div>
                <div className="col-span-2 col-start-2 pt-5">
                    <label htmlFor="tags" className="block mb-2 text-sm font-medium text-white">Tags</label>
                    <input type="text" id="tags" className="block p-3 w-full text-sm text-white bg-mute-black rounded-lg border border-white shadow-sm focus:ring-basically-white focus:border-basically-white" placeholder="Let us know how we can help you" required onChange={e => { setTags(e.target.value) }} />
                </div>
                <div className="pt-5 col-start-2">
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-mute-black rounded-lg focus:ring-4 focus:ring-basically-white hover:text-basically-white">
                        Send feedback
                    </button>
                </div>
            </form>
                
        </>
    );
}
