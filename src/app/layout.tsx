import type {ReactElement, ReactNode} from "react";
import "./globals.css";
import NavBar from "./navbar"
import Footer from "./footer"

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}): ReactElement {
    return (
        <html lang="en">
            {/*
            <head /> will contain the components returned by the nearest parent
            head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <head />
            <body>
                <NavBar />
                <main>{children}</main>
                <Footer />
                <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
            </body>
        </html>
    );
}
