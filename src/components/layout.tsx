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
            <NavBar />
            <div className="container mx-auto">
                {children}
            </div>
            <FooterBar />
        </main>
    );
}
