import Link from "next/link";
import Image from "next/image";
import type {ReactElement} from "react";

export default function ImageFormat(): ReactElement {
    return (
        <Link rel="icon" href="/pikareed-logo.ico">
            <Image src="/pikareed-logo.ico" alt="website icon" width="50" height="75" />
        </Link>
    );
}