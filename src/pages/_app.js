// pages/_app.js

// Imports
import Head from 'next/head';

import Navbar from '../components/Navbar';

import '../styles/style.css';

// Logic
export default function MyApp({ Component, pageProps }) {
    // Markup
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="/favicon.svg"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-chrome-192x192.png"
                />
            </Head>

            <Navbar />
            <Component {...pageProps} />
        </>
    );
}