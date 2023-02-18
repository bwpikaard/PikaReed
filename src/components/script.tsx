import Script from "next/script";
import type {ReactElement} from "react";

export default function Scripts(): ReactElement {
    return (
        <>
            <Script src="../path/to/flowbite/dist/flowbite.js"></Script>
        </>
    );
}
