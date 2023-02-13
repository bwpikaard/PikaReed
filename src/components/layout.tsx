import type {ReactElement, ReactNode} from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import "flowbite-react";
import "flowbite";
import Head from "./head";
import Script from "next/script";

export default function Layout({
    children,
}: {
    children: ReactNode;
}): ReactElement {
    return (
        <html lang="en">
            <Head />
            <body>
                <NavBar />
                <main>{children}</main>
                <Footer />
                <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
            </body>
        </html>
    );
}
