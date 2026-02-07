// pages/_app.js
import Head from 'next/head';

// Global styles
import '../styles/style.css';

// Global components
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* Viewport */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Favicons */}
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />

                {/* Default Twitter card type */}
                <meta name="twitter:card" content="summary_large_image" />

                {/* --- ADDED FOR SEO / GOOGLE BRAND NAME --- */}

                {/* Default site title */}
                <title>Sesame Legal – Expert Legal Services</title>

                {/* Default meta description */}
                <meta
                    name="description"
                    content="Sesame Legal provides expert legal services."
                />

                {/* JSON-LD structured data telling Google your website name */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "Sesame Legal", // Your brand name
                            "url": "https://www.sesamelegal.com/" // Your website URL
                        })
                    }}
                />
                {/* --- END ADDED FOR SEO --- */}
            </Head>

            <header>
                <Navbar />
            </header>

            <Component {...pageProps} />
        </>
    );
}
