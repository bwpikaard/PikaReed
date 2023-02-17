import type {ReactElement, ReactNode} from "react";
import NavBar from "./navbar";
import FooterBar from "./footer";

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
