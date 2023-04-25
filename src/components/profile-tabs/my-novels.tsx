import Image from "next/image";
import Link from "next/link";
import type {ReactElement} from "react";

export default function MyNovels(): ReactElement {
    return (
        <>
            <div className="flex justify-start flex-wrap pt-10 pb-3">
                <button type="button" className="text-white border border-white hover:border-basically-white bg-mute-black focus:ring-4 focus:outline-none focus:ring-basically-white rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3">Create Novel</button>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 flex justify-center flex-wrap">
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
                <Link href="/">
                    <Image data-popover-target="popover-no-arrow" data-popover-placement="bottom" className="rounded-lg" src="/no-cover.png" alt="" height="384" width="256" />
                </Link>
            </div>
        </>
    );
}
