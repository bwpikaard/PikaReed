import type {ReactElement} from "react";

export default function Feedback(): ReactElement {
    function tableRows(): ReactElement {
        // eslint-disable-next-line no-undef
        const rows: JSX.Element[] = [];
        for (let i = 0;i < 10;i++) {
            const oneRow = <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    creeder3@my.apsu.edu
                </th>
                <td className="px-6 py-4">
                    A bunch of subject materialA bunch of subject material
                </td>
                <td className="px-6 py-4">
                    This would be where the message is an will need to be quite longThis would be where the message is an will need to be quite longThis would be where the message is an will need to be quite longThis would be where the message is an will need to be quite longThis would be where the message is an will need to be quite longThis would be where the message is an will need to be quite longThis would be where the message is an will need to be quite longThis would be where the message is an will need to be quite longThis would be where the message is an will need to be quite long
                </td>
                <td className="px-6 py-4">
                    <button type="button">Delete</button>
                </td>
            </tr>;
            rows.push(oneRow);
        }
        return <tbody>{rows}</tbody>;
    }

    return (
        <>
            <div className="pt-10">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
