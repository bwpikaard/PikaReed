import type {ReactElement} from "react";
import useSWR from "swr";

import type {FeedbackSubmission} from "../entities/feedback.entity";
import {fetcher} from "../lib/swrFetcher";

export default function Feedback(): ReactElement {
    const {data: feedback, error: feedbackError} = useSWR<FeedbackSubmission[], Error>("/api/feedback", fetcher);

    if (!feedback || feedbackError) return <div>Loading...</div>;

    return (
        <>
            <div className="pt-10 pb-10">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-white">
                        <thead className="text-xs text-white uppercase bg-mute-black border-b border-basically-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Subject
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Message
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedback.map(f => (
                                <tr className="bg-mute-grey border-b border-basically-white" key={f.id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        {f.email}
                                    </th>
                                    <td className="px-6 py-4 text-white">
                                        {f.subject}
                                    </td>
                                    <td className="px-6 py-4 text-white">
                                        {f.body}
                                    </td>
                                </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
