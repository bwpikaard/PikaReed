import "reflect-metadata";
import "@/styles/globals.css";
import type {AppProps} from "next/app";
import type {ReactElement} from "react";
import {DataSource} from "@/data-source";

DataSource.initialize();

export default function App({Component, pageProps}: AppProps): ReactElement {
    return <Component {...pageProps} />;
}
