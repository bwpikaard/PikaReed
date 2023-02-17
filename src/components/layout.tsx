import type {ReactElement, ReactNode} from "react";

import Footer from "./footer";
import NavBar from "./navbar";

export default function Layout({
    children,
}: {
    children: ReactNode;
}): ReactElement {
    return (
        <main>
            <NavBar />
            <div className="container mx-auto">
                {children}
            </div>
            <Footer />
        </main>
    );
}
