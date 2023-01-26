import type { AppProps } from "next/app";
import localFont from "@next/font/local";

import "tailwindcss/tailwind.css";
import Head from "next/head";

const modernDOS = localFont({
  src: "../public/assets/fonts/ModernDOS.woff2",
  variable: "--font-modern-dos",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BASHRUV.DEV</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={`${modernDOS.variable} cursor-[url('/assets/images/cursors/arrow.png')] font-sans`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
