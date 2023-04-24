import type {ReactElement} from "react";

export default function ChangeEmail(): ReactElement {
    return (
        <>
            <form className="pt-10">
                <div className="mb-12">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Verify Password</label>
                    <input type="email" id="email" className="bg-mute-black border border-white text-white text-sm rounded-lg focus:ring-basically-white focus:border-basically-white block w-full p-2.5" placeholder="•••••••••" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">New Email</label>
                    <input type="password" id="password" className="bg-mute-black border border-white text-white text-sm rounded-lg focus:ring-basically-white focus:border-basically-white block w-full p-2.5" placeholder="john.doe@pikareed.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-white">Confirm Email</label>
                    <input type="password" id="confirm_password" className="bg-mute-black border border-white text-white text-sm rounded-lg focus:ring-basically-white focus:border-basically-white block w-full p-2.5" placeholder="john.doe@pikareed.com" required />
                </div>
                <button type="submit" className="text-white bg-mute-black hover:text-basically-white focus:ring-4 focus:outline-none focus:ring-basically-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </>
    );
}
