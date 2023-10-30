import "@/styles/globals.css";
import React from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <link rel="icon" type="image/svg+xml" href="/favicon.ico" /> */}
        <link rel="icon" type="image/svg+xml" href="/fav.svg.png" />
        <title>Help Ukraine Hub</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
