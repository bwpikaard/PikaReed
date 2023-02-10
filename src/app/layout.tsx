import type {ReactElement, ReactNode} from "react";
import "./globals.css";

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
            <body>{children}</body>
        </html>
    );
}
