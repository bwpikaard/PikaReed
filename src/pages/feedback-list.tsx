import type {ReactElement} from "react";

export default function Feedback(): ReactElement {
    function tableRows(): ReactElement {
        // eslint-disable-next-line no-undef
        const rows: JSX.Element[] = [];
        for (let i = 0;i < 10;i++) {
            const oneRow = <tr className="bg-mute-grey border-b border-basically-white">
                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                    creeder3@my.apsu.edu
                </th>
                <td className="px-6 py-4 text-white">
                    A bunch of subject materialA bunch of subject material
                </td>
                <td className="px-6 py-4 text-white">
                    This would be where the message is an will need to be quite longThis would be where the message is an will need to be quite longThis would be where the message is an will need to be quite longThis would be where the message is an will need to be quite longThis would be where the message is an will need to be quite longThis would be where the message is an will need to be quite longThis would be where the message is an will need to be quite longThis would be where the message is an will need to be quite longThis would be where the message is an will need to be quite long
                </td>
                <td className="px-6 py-4 text-white">
                    <button type="button" className="hover:text-basically-white">Delete</button>
                </td>
            </tr>;
            rows.push(oneRow);
        }
        return <tbody>{rows}</tbody>;
    }

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
                                <th scope="col" className="px-6 py-3">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        {tableRows()}
                    </table>
                </div>
            </div>
        </>
    );
}
