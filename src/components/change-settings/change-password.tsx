import axios from "axios";
import {useSession} from "next-auth/react";
import type {FormEvent, ReactElement} from "react";
import {useState} from "react";

export default function ChangePassword(): ReactElement {
    const session = useSession();
    const [currentPassword, setCurrentPassword] = useState<string>();
    const [newPassword, setNewPassword] = useState<string>();
    const [confirmedPassword, setConfirmedPassword] = useState<string>();

    if (!session?.data?.user) return <div>Loading...</div>;

    const handleSubmit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();

        if (!currentPassword?.length || !newPassword?.length || !confirmedPassword?.length) {
            alert("Missing a field");
            return;
        }

        await axios.post("/api/auth/changePassword", {
            currentPassword, newPassword, confirmedPassword,
        }).then(() => { alert("Done") })
            .catch(() => { alert("Error") });
    };
    return (
        <>
            <form className="pt-10" onSubmit={handleSubmit}>
                <div className="mb-12">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Current Password</label>
                    <input type="password" id="password" className="bg-mute-black border border-white text-white text-sm rounded-lg focus:ring-basically-white focus:border-basically-white block w-full p-2.5" placeholder="•••••••••" required onChange={e => { setCurrentPassword(e.target.value) }} />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">New Password</label>
                    <input type="password" id="password" className="bg-mute-black border border-white text-white text-sm rounded-lg focus:ring-basically-white focus:border-basically-white block w-full p-2.5" placeholder="•••••••••" required onChange={e => { setNewPassword(e.target.value) }} />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
                    <input type="password" id="confirm_password" className="bg-mute-black border border-white text-white text-sm rounded-lg focus:ring-basically-white focus:border-basically-white block w-full p-2.5" placeholder="•••••••••" required onChange={e => { setConfirmedPassword(e.target.value) }} />
                </div>
                <button type="submit" className="text-white bg-mute-black hover:text-basically-white focus:ring-4 focus:ring-basically-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </>
    );
}
