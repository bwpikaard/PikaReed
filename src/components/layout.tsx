import type {ReactElement, ReactNode} from "react";

import Footer from "./footer";
import FooterBar from "./footer";
import NavBar from "./navbar";

export default function Layout({
    children,
}: {
    children: ReactNode;
}): ReactElement {
    return (
        <main>
            <div className="container mx-auto flex flex-col min-h-screen">
                <NavBar />
                {children}
                <FooterBar />
            </div>
        </main>
    );
}
