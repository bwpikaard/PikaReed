import "reflect-metadata";
import "@/styles/globals.css";
import "flowbite-react";
import "flowbite";

import type {AppProps} from "next/app";
import {SessionProvider} from "next-auth/react";
import type {ReactElement} from "react";

import Layout from "@/components/layout";

export default function App({Component, pageProps: {session, ...pageProps} }: AppProps): ReactElement {
    return <SessionProvider session={session}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </SessionProvider>;
}
