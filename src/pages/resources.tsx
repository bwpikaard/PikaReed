import {Accordion} from "flowbite-react";
import type {ReactElement} from "react";

export default function Resources(): ReactElement {
    return (
        <div className="pt-10">
            <Accordion alwaysOpen={true}>
                <Accordion.Panel>
                    <Accordion.Title className="focus:ring-opacity-0 hover:bg-mute-black bg-mute-black hover:text-basically-white flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-white rounded-t-xl">
                        <span>How to request novel be displayed on the homepage...</span>
                    </Accordion.Title>
                    <Accordion.Content className="p-5 font-light bg-mute-grey">
                        <p className="text-white">First, navigate to the &apos;Feedback&apos; tab located at the top of the screen in the navbar.</p>
                        <p className="text-white">Once in the Feedback page, select &apos;Display Novel&apos; in the subject category, and type the name of novel you want displayed in the message section.</p>
                        <p className="text-white">After you have finished, hit submit and our stuff will review your request as soon as possible.</p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className="focus:ring-opacity-0 hover:bg-mute-black bg-mute-black flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-white hover:text-basically-white">
                        <span>Improving grammar...</span>
                    </Accordion.Title>
                    <Accordion.Content className="p-5 font-light bg-mute-grey">
                        <p className="mb-2 text-white">Writing a novel is a great way to practice English. Here are some additional sites that may help:</p>
                        <ul className="pl-5 text-white list-disc">
                            <li><a href="https://www.englishgrammar.org/" className="text-basically-white hover:underline">https://www.englishgrammar.org/</a></li>
                            <li><a href="https://www.perfect-english-grammar.com/index.html" className="text-basically-white hover:underline">https://www.perfect-english-grammar.com/index.html</a></li>
                            <li><a href="https://owl.purdue.edu/" className="text-basically-white hover:underline">https://owl.purdue.edu/</a></li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className="focus:ring-opacity-0 hover:bg-mute-black bg-mute-black flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-white hover:text-basically-white">
                        <span>Character Development...</span>
                    </Accordion.Title>
                    <Accordion.Content className="p-5 font-light bg-mute-grey">
                        <p className="mb-2 text-white">Creating or maintaing a character can be challenging. Here are some sites that can help:</p>
                        <ul className="pl-5 text-white list-disc">
                            <li><a href="https://self-publishingschool.com/character-development/" className="text-basically-white hover:underline">https://self-publishingschool.com/character-development/</a></li>
                            <li><a href="https://www.imagineforest.com/blog/character-development/" className="text-basically-white hover:underline">https://www.imagineforest.com/blog/character-development/</a></li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className="focus:ring-opacity-0 hover:bg-mute-black bg-mute-black flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-white hover:text-basically-white">
                        <span>Writing scenery...</span>
                    </Accordion.Title>
                    <Accordion.Content className="p-5 font-light bg-mute-grey">
                        <p className="mb-2 text-white">Want to improve your world building? Try improving the scenery with these sites:</p>
                        <ul className="pl-5 text-white list-disc">
                            <li><a href="https://www.masterclass.com/articles/tips-for-starting-strong-scenes-in-your-writing" className="text-basically-white hover:underline">https://www.masterclass.com/articles/tips-for-starting-strong-scenes-in-your-writing</a></li>
                            <li><a href="http://bekindrewrite.com/2013/06/07/how-to-stop-boring-your-readers-with-scenic-description/" className="text-basically-white hover:underline">http://bekindrewrite.com/2013/06/07/how-to-stop-boring-your-readers-with-scenic-description/</a></li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className="focus:ring-opacity-0 hover:bg-mute-black bg-mute-black flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-white hover:text-basically-white">
                        <span>New novel ideas...</span>
                    </Accordion.Title>
                    <Accordion.Content className="p-5 font-light bg-mute-grey">
                        <p className="mb-2 text-white">Stuck thinking of what to write about? Try these sites:</p>
                        <ul className="pl-5 text-white list-disc">
                            <li><a href="https://writers.com/how-to-come-up-with-story-ideas" className="text-basically-white hover:underline">https://writers.com/how-to-come-up-with-story-ideas</a></li>
                            <li><a href="https://www.nownovel.com/blog/how-to-find-book-ideas-easy/" className="text-basically-white hover:underline">https://www.nownovel.com/blog/how-to-find-book-ideas-easy/</a></li>
                        </ul>
                        <p className="mt-3 mb-2 text-white">Also try this plot generating site:</p>
                        <ul className="pl-5 text-white list-disc">
                            <li><a href="https://blog.reedsy.com/plot-generator/" className="text-basically-white hover:underline">https://blog.reedsy.com/plot-generator/</a></li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className="focus:ring-opacity-0 hover:bg-mute-black bg-mute-black flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-white hover:text-basically-white">
                        <span>Preplanning for a novel...</span>
                    </Accordion.Title>
                    <Accordion.Content className="p-5 font-light bg-mute-grey">
                        <p className="mb-2 text-white">It is incredibly important to properly plan out a novel. Here are a few sites that can help with that:</p>
                        <ul className="pl-5 text-white list-disc">
                            <li><a href="https://nationalcentreforwriting.org.uk/article/how-to-write-a-novel-a-step-by-step-guide/?gclid=CjwKCAjwitShBhA6EiwAq3RqA1_nYHvzLT1vp769CDvMnmoaEUnYD3Gi9buWTUsiZ_5kXwOyr0_EkBoCyZoQAvD_BwE" className="text-basically-white hover:underline">https://nationalcentreforwriting.org.uk/article/how-to-write-a-novel-a-step-by-step-guide/</a></li>
                            <li><a href="https://writersedit.com/fiction-writing/everything-you-need-to-know-about-planning-your-novel/" className="text-basically-white hover:underline">https://writersedit.com/fiction-writing/everything-you-need-to-know-about-planning-your-novel/</a></li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
}
