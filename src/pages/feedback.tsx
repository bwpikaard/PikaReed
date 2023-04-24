import type {ReactElement} from "react";

export default function Feedback(): ReactElement {
    return (
        <>
            <section className="bg-greyish">
                <div className="py-10 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Feedback</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">If you see any bugs or have any ideas you want to share let us know!</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-mute-black border border-white text-white text-sm rounded-lg focus:ring-basically-white focus:border-basically-white block w-full p-2.5" placeholder="name@pikareed.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-white bg-mute-black rounded-lg border border-white shadow-sm focus:ring-basically-white focus:border-basically-white" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                            <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-white bg-mute-black rounded-lg shadow-sm border border-white focus:ring-basically-white focus:border-basically-white" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-mute-black rounded-lg focus:ring-4 focus:ring-basically-white hover:text-basically-white">
                            Send feedback
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
