import type {ReactElement, ReactNode} from "react";

import Footer from "./footer";
import NavBar from "./navbar";
import Scripts from "./script";

export default function Layout({
    children,
}: {
    children: ReactNode;
}): ReactElement {
    return (
        <main>
            <NavBar />
            <div className="container mx-auto flex flex-col min-h-screen">
                {children}
            </div>
            <Footer />
            <Scripts />
        </main>
    );
}
