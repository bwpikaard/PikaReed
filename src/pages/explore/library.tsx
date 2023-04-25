import Image from "next/image";
import Link from "next/link";
import type {ReactElement} from "react";

export default function Library(): ReactElement {
    return (
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 flex justify-center flex-wrap pt-10 pb-8">
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

            <div data-popover id="popover-no-arrow" role="tooltip" className="absolute z-10 invisible inline-block w-96 text-sm text-white transition-opacity duration-300 border border-greyish shadow-sm opacity-0">
                <div className="px-3 py-2 bg-mute-black border-b border-basically-white rounded-t-lg">
                    <h3 className="font-semibold text-white">Book Title</h3>
                </div>
                <div className="px-3 py-2 bg-mute-grey rounded-b-lg">
                    <p>Book description</p>
                </div>
            </div>

            <nav aria-label="Page navigation example" className="flex justify-center flex-wrap pb-10">
                <ul className="inline-flex -space-x-px">
                    <li>
                        <a href="#" className="px-3 py-2 ml-0 leading-tight text-white bg-mute-black border border-white rounded-l-lg hover:border-basically-white hover:text-basically-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 leading-tight text-white bg-mute-grey border border-white hover:border-basically-white hover:text-basically-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 leading-tight text-white bg-mute-grey border border-white hover:border-basically-white hover:text-basically-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="px-3 py-2 leading-tight text-white bg-mute-grey border border-white hover:border-basically-white hover:text-basically-white">3</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 leading-tight text-white bg-mute-grey border border-white hover:border-basically-white hover:text-basically-white">4</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 leading-tight text-white bg-mute-grey border border-white hover:border-basically-white hover:text-basically-white">5</a>
                    </li>
                    <li>
                        <a href="#" className="px-5 py-2 leading-tight text-white bg-mute-black border border-white rounded-r-lg hover:text-basically-white hover:border-basically-white">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
