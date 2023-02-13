import "reflect-metadata";
import "@/styles/globals.css";
import type {AppProps} from "next/app";
import type {ReactElement} from "react";
import {DataSource} from "@/data-source";
import Layout from "@/components/layout";

// DataSource.initialize();

export default function App({Component, pageProps}: AppProps): ReactElement {
    return <Layout>
        <Component {...pageProps} />
    </Layout>;
}
