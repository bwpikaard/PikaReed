import type {ReactElement, ReactNode} from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import "flowbite-react";
import "flowbite";

export default function Layout({
    children,
}: {
    children: ReactNode;
}): ReactElement {
    return (
        <main>
            <NavBar />
            {children}
            <Footer />
        </main>
    );
}
