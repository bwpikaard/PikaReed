import type {ReactElement} from "react";

export default function About(): ReactElement {
    return (
        <>
            <div className="pt-10 grid grid-cols-6">
                <div className="col-span-4 col-start-2">
                    This website was created in an effort to give new writers a platform to spread their work. <br/><br/>
                    We give writers a platform in several ways:<br/>
                    <ul className="pl-10 list-disc">
                        <li>Display carousel for new novels on the homepage</li>
                        <li>Resources page for improving writing</li>
                        <li>Feedback page to improve areas of the site writers feel is lacking</li>
                        <li>Wide selection of novels from other users to use as inspiration</li>
                        <li>Trusted users can leave suggestions on a novel&apos;s chapter</li>
                        <li>Reviews and comments from other users can be used to judge your current approach to writing</li>
                    </ul><br/>

                    If you find any bugs please contact our staff through the feedback page, providing your email for further correspondence.<br/><br/>
                    Please enjoy your time on PikaReed!
                </div>
            </div>
        </>
    );
}
