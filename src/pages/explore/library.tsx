import Image from "next/image";
import Link from "next/link";
import type {ReactElement} from "react";

export default function Library(): ReactElement {
    return (
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 flex justify-center flex-wrap py-10">
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
            </div>

            <div data-popover id="popover-no-arrow" role="tooltip" className="absolute z-10 invisible inline-block w-96 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Book Title</h3>
                </div>
                <div className="px-3 py-2">
                    <p>Book description</p>
                </div>
            </div>

            <nav aria-label="Page navigation example" className="flex justify-center flex-wrap py-8">
                <ul className="inline-flex -space-x-px">
                    <li>
                        <a href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
