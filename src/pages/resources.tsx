import type {ReactElement} from "react";

export default function Resources(): ReactElement {
    return (
        <>
            <div id="accordion-open" data-accordion="open" className="pt-10">
                <h2 id="accordion-open-heading-1">
                    <button type="button" className="bg-mute-black hover:text-basically-white flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-white rounded-t-xl" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                        <span>How to request novel be displayed on the homepage...</span>
                        <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-open-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
                    <div className="p-5 font-light border border-b-0 border-white bg-mute-grey">
                        <p className="text-white">First, navigate to the &apos;Feedback&apos; tab located at the top of the screen in the navbar.</p>
                        <p className="text-white">Once in the Feedback page, select &apos;Display Novel&apos; in the subject category, and type the name of novel you want displayed in the message section.</p>
                        <p className="text-white">After you have finished, hit submit and our stuff will review your request as soon as possible.</p>
                    </div>
                </div>
                <h2 id="accordion-open-heading-2">
                    <button type="button" className="bg-mute-black flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-white hover:text-basically-white" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                        <span>Improving grammar...</span>
                        <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
                    <div className="bg-mute-grey p-5 font-light border border-b-0 border-white">
                        <p className="mb-2 text-white">Writing a novel is a great way to practice English. Here are some additional sites that may help:</p>
                        <ul className="pl-5 text-white list-disc">
                            <li><a href="https://www.englishgrammar.org/" className="text-basically-white hover:underline">https://www.englishgrammar.org/</a></li>
                            <li><a href="https://www.perfect-english-grammar.com/index.html" className="text-basically-white hover:underline">https://www.perfect-english-grammar.com/index.html</a></li>
                            <li><a href="https://owl.purdue.edu/" className="text-basically-white hover:underline">https://owl.purdue.edu/</a></li>
                        </ul>
                    </div>
                </div>
                <h2 id="accordion-open-heading-3">
                    <button type="button" className="bg-mute-black flex items-center justify-between w-full p-5 font-medium text-left text-white border border-white hover:text-basically-white" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                        <span>Character Development...</span>
                        <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-open-body-3" className="hidden" aria-labelledby="accordion-open-heading-3">
                    <div className="bg-mute-grey p-5 font-light border border-t-0 border-white">
                        <p className="mb-2 text-white">Creating or maintaing a character can be challenging. Here are some sites that can help:</p>
                        <ul className="pl-5 text-white list-disc">
                            <li><a href="https://self-publishingschool.com/character-development/" className="text-basically-white hover:underline">https://self-publishingschool.com/character-development/</a></li>
                            <li><a href="https://www.imagineforest.com/blog/character-development/" className="text-basically-white hover:underline">https://www.imagineforest.com/blog/character-development/</a></li>
                        </ul>
                    </div>
                </div>
                <h2 id="accordion-open-heading-4">
                    <button type="button" className="bg-mute-black flex items-center justify-between w-full p-5 font-medium text-left text-white border border-white hover:text-basically-white" data-accordion-target="#accordion-open-body-4" aria-expanded="false" aria-controls="accordion-open-body-4">
                        <span>Writing scenery...</span>
                        <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-open-body-4" className="hidden" aria-labelledby="accordion-open-heading-4">
                    <div className="bg-mute-grey p-5 font-light border border-t-0 border-white">
                        <p className="mb-2 text-white">Want to improve your world building? Try improving the scenery with these sites:</p>
                        <ul className="pl-5 text-white list-disc">
                            <li><a href="https://www.masterclass.com/articles/tips-for-starting-strong-scenes-in-your-writing" className="text-basically-white hover:underline">https://www.masterclass.com/articles/tips-for-starting-strong-scenes-in-your-writing</a></li>
                            <li><a href="http://bekindrewrite.com/2013/06/07/how-to-stop-boring-your-readers-with-scenic-description/" className="text-basically-white hover:underline">http://bekindrewrite.com/2013/06/07/how-to-stop-boring-your-readers-with-scenic-description/</a></li>
                        </ul>
                    </div>
                </div>
                <h2 id="accordion-open-heading-5">
                    <button type="button" className="hover:text-basically-white bg-mute-black flex items-center justify-between w-full p-5 font-medium text-left text-white border border-white" data-accordion-target="#accordion-open-body-5" aria-expanded="false" aria-controls="accordion-open-body-5">
                        <span>New novel ideas...</span>
                        <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-open-body-5" className="hidden" aria-labelledby="accordion-open-heading-5">
                    <div className="bg-mute-grey p-5 font-light border border-t-0 border-white">
                        <p className="mb-2 text-white">Stuck thinking of what to write about? Try these sites:</p>
                        <ul className="pl-5 text-white list-disc">
                            <li><a href="https://writers.com/how-to-come-up-with-story-ideas" className="text-basically-white hover:underline">https://writers.com/how-to-come-up-with-story-ideas</a></li>
                            <li><a href="https://www.nownovel.com/blog/how-to-find-book-ideas-easy/" className="text-basically-white hover:underline">https://www.nownovel.com/blog/how-to-find-book-ideas-easy/</a></li>
                        </ul>
                        <p className="mt-3 mb-2 text-white">Also try this plot generating site:</p>
                        <ul className="pl-5 text-white list-disc">
                            <li><a href="https://blog.reedsy.com/plot-generator/" className="text-basically-white hover:underline">https://blog.reedsy.com/plot-generator/</a></li>
                        </ul>
                    </div>
                </div>
                <h2 id="accordion-open-heading-6">
                    <button type="button" className="bg-mute-black flex items-center justify-between w-full p-5 font-medium text-left text-white border border-white hover:text-basically-white" data-accordion-target="#accordion-open-body-6" aria-expanded="false" aria-controls="accordion-open-body-6">
                        <span>Preplanning for a novel...</span>
                        <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-open-body-6" className="hidden" aria-labelledby="accordion-open-heading-6">
                    <div className="bg-mute-grey text-white p-5 font-light border border-t-0 border-white">
                        <p className="mb-2 text-white">It is incredibly important to properly plan out a novel. Here are a few sites that can help with that:</p>
                        <ul className="pl-5 text-white list-disc">
                            <li><a href="https://nationalcentreforwriting.org.uk/article/how-to-write-a-novel-a-step-by-step-guide/?gclid=CjwKCAjwitShBhA6EiwAq3RqA1_nYHvzLT1vp769CDvMnmoaEUnYD3Gi9buWTUsiZ_5kXwOyr0_EkBoCyZoQAvD_BwE" className="text-basically-white hover:underline">https://nationalcentreforwriting.org.uk/article/how-to-write-a-novel-a-step-by-step-guide/</a></li>
                            <li><a href="https://writersedit.com/fiction-writing/everything-you-need-to-know-about-planning-your-novel/" className="text-basically-white hover:underline">https://writersedit.com/fiction-writing/everything-you-need-to-know-about-planning-your-novel/</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
