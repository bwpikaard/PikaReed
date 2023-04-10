import {Carousel} from "flowbite-react";
import Image from "next/image";
import Link from "next/link"
import type {ReactElement} from "react";

export default function Home(): ReactElement {
    return (
        <>
            <div className="pt-10">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel slideInterval={5000}>
                        <Image
                            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                            alt="New Novel"
                            height="125"
                            width="350"
                        />
                        <Image
                            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                            alt="New Novel"
                            height="125"
                            width="350"
                        />
                        <Image
                            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                            alt="New Novel"
                            height="125"
                            width="350"
                        />
                        <Image
                            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                            alt="New Novel"
                            height="125"
                            width="350"
                        />
                        <Image
                            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                            alt="New Novel"
                            height="125"
                            width="350"
                        />
                    </Carousel>
                </div>
            </div>

            <div className="pt-10">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Chapter
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Author
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Pages
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link href="/novel-homepage">Charlie and the Chocolate Factory</Link>
                                </th>
                                <td className="px-6 py-4">
                                    <Link href="/novel-chapter">c23</Link>
                                </td>
                                <td className="px-6 py-4">
                                    Roald Dahl
                                </td>
                                <td className="px-6 py-4">
                                    192
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link href="#">Wizard of Oz</Link>
                                </th>
                                <td className="px-6 py-4">
                                    <Link href="#">c32</Link>
                                </td>
                                <td className="px-6 py-4">
                                    L. Frank Baum
                                </td>
                                <td className="px-6 py-4">
                                    272
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link href="#">The Alchemist</Link>
                                </th>
                                <td className="px-6 py-4">
                                    <Link href="#">c12</Link>
                                </td>
                                <td className="px-6 py-4">
                                    Paulo Coelho
                                </td>
                                <td className="px-6 py-4">
                                    163
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    );
}
