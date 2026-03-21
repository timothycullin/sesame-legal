// Imports
import Head from 'next/head';
import Footer from '../components/Footer';
import styles from './about.module.css';

// Logic
export default function About() {
    const pageUrl = 'https://www.sesamelegal.com/about';
    const seoTitle = 'About | Sesame Legal';
    const seoDescription =
        'Sesame Legal provides clear, practical legal information and commentary to help people better understand legal processes and human rights in Australia.';

    return (
        <div className={styles.page}>
            <Head>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={pageUrl} />

                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta
                    property="og:image"
                    content="https://www.sesamelegal.com/social-preview-1200x630.png"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDescription} />
                <meta
                    name="twitter:image"
                    content="https://www.sesamelegal.com/social-preview-1200x630.png"
                />
            </Head>

            <main className={styles.main}>
                <section className={styles.hero} aria-labelledby="about-sesame-legal">
                    <p className={styles.eyebrow}>About</p>

                    <h1 id="about-sesame-legal" className={styles.title}>
                        Sesame Legal
                    </h1>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            Sesame Legal is an independent legal resource focused on making
                            complex legal information clear and accessible.
                        </p>

                        <div className={styles.body}>
                            <p>
                                We provide practical guidance and commentary to help people better
                                understand legal processes and human rights in Australia.
                            </p>

                            <p>
                                The aim is to present legal material in a way that is direct,
                                readable, and useful without losing seriousness or precision.
                            </p>
                        </div>

                        <p className={styles.note}>
                            Sesame Legal is intended as a general legal information resource and
                            does not replace tailored legal advice.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}