import Image from "next/image";
import Link from "next/link";
import type {ReactElement} from "react";

export default function TopRanked(): ReactElement {
    return (
        <>
            { /* Gallery with tag filters */ }
            <div className="flex justify-center flex-wrap pt-10 pb-5">
                <button type="button" className="text-white border border-white hover:text-basically-white bg-mute-black focus:ring-4 focus:outline-none focus:ring-basically-white rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3">Views</button>
                <button type="button" className="text-white border border-white hover:text-basically-white bg-mute-black focus:ring-4 focus:outline-none focus:ring-basically-white rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3">Ratings</button>
                <button type="button" className="text-white border border-white hover:text-basically-white bg-mute-black focus:ring-4 focus:outline-none focus:ring-basically-white rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3">Follows</button>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-center pb-10">
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow-one" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow-two" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow-three" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
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

            <div data-popover id="popover-no-arrow-one" role="tooltip" className="absolute z-10 invisible inline-block w-96 text-sm text-white transition-opacity duration-300 border border-greyish shadow-sm opacity-0">
                <div className="px-3 py-2 bg-mute-black border-b border-basically-white rounded-t-lg">
                    <h3 className="font-semibold text-white">Book Title</h3>
                </div>
                <div className="px-3 py-2 bg-mute-grey rounded-b-lg">
                    <p>Book description</p>
                </div>
            </div>

            <div data-popover id="popover-no-arrow-two" role="tooltip" className="absolute z-10 invisible inline-block w-96 text-sm text-white transition-opacity duration-300 border border-greyish shadow-sm opacity-0">
                <div className="px-3 py-2 bg-mute-black border-b border-basically-white rounded-t-lg">
                    <h3 className="font-semibold text-white">Book Title</h3>
                </div>
                <div className="px-3 py-2 bg-mute-grey rounded-b-lg">
                    <p>Book description</p>
                </div>
            </div>

            <div data-popover id="popover-no-arrow-three" role="tooltip" className="absolute z-10 invisible inline-block w-96 text-sm text-white transition-opacity duration-300 border border-greyish shadow-sm opacity-0">
                <div className="px-3 py-2 bg-mute-black border-b border-basically-white rounded-t-lg">
                    <h3 className="font-semibold text-white">Book Title</h3>
                </div>
                <div className="px-3 py-2 bg-mute-grey rounded-b-lg">
                    <p>Book description</p>
                </div>
            </div>
        </>
    );
}
