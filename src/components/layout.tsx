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
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <div className="container mx-auto flex-grow">
                    {children}
                </div>
                <Footer />
            </div>
        </main>
    );
}
