import axios from "axios";
import {useSession} from "next-auth/react";
import type {FormEvent, ReactElement} from "react";
import {useState} from "react";

export default function ChangeEmail(): ReactElement {
    const session = useSession();
    const [password, setPassword] = useState<string>();
    const [newEmail, setNewEmail] = useState<string>();
    const [confirmedEmail, setConfirmedEmail] = useState<string>();

    if (!session?.data?.user) return <div>Loading...</div>;

    const handleSubmit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();

        if (!password?.length || !newEmail?.length || !confirmedEmail?.length) {
            alert("Missing a field");
            return;
        }

        await axios.post("/api/auth/changeEmail", {
            password, newEmail, confirmedEmail,
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
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">New Email</label>
                    <input type="email" id="email" className="bg-mute-black border border-white text-white text-sm rounded-lg focus:ring-basically-white focus:border-basically-white block w-full p-2.5" placeholder="john.doe@pikareed.com" required onChange={e => { setNewEmail(e.target.value) }} />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-white">Confirm Email</label>
                    <input type="email" id="confirm_password" className="bg-mute-black border border-white text-white text-sm rounded-lg focus:ring-basically-white focus:border-basically-white block w-full p-2.5" placeholder="john.doe@pikareed.com" required onChange={e => { setConfirmedEmail(e.target.value) }} />
                </div>
                <button type="submit" className="text-white bg-mute-black hover:text-basically-white focus:ring-4 focus:outline-none focus:ring-basically-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </>
    );
}
