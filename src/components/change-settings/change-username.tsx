import axios from "axios";
import {useSession} from "next-auth/react";
import type {FormEvent, ReactElement} from "react";
import {useState} from "react";

export default function ChangeUsername(): ReactElement {
    const session = useSession();
    const [password, setPassword] = useState<string>();
    const [newUsername, setNewUsername] = useState<string>();
    const [confirmedUsername, setConfirmedUsername] = useState<string>();

    if (!session?.data?.user) return <div>Loading...</div>;

    const handleSubmit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();

        if (!password?.length || !newUsername?.length || !confirmedUsername?.length) {
            alert("Missing a field");
            return;
        }

        await axios.post("/api/auth/changeUsername", {
            password, newUsername, confirmedUsername,
        }).then(() => { alert("Done") })
            .catch(() => { alert("Error") });
    };

    return (
        <>
            <form className="pt-10" onSubmit={handleSubmit}>
                <div className="mb-12">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Verify Password</label>
                    <input type="password" id="password" className="bg-mute-black border border-white text-white text-sm rounded-lg focus:ring-basically-white focus:border-basically-white block w-full p-2.5" placeholder="•••••••••" required onChange={e => { setPassword(e.target.value) }} />
                </div>
                <div className="mb-6">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">New Username</label>
                    <input type="text" id="username" className="bg-mute-black border border-white text-white text-sm rounded-lg focus:ring-basically-white focus:border-basically-white block w-full p-2.5" placeholder="john.doe" required onChange={e => { setNewUsername(e.target.value) }} />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirmed_username" className="block mb-2 text-sm font-medium text-white">Confirm Username</label>
                    <input type="text" id="confirmed_username" className="bg-mute-black border border-white text-white text-sm rounded-lg focus:ring-basically-white focus:border-basically-white block w-full p-2.5" placeholder="john.doe" required onChange={e => { setConfirmedUsername(e.target.value) }} />
                </div>
                <button type="submit" className="text-white bg-mute-black hover:text-basically-white focus:ring-4 focus:outline-none focus:ring-basically-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </>
    );
}
