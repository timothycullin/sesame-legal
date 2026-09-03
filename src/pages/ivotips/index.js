// Imports
import Head from 'next/head';
import Link from 'next/link';

import Footer from '../../components/Footer';

import tips from '../../data/tips';

import styles from './ivotips.module.css';

// Logic
const pageUrl = 'https://www.sesamelegal.com/ivotips';
const pageTitle =
    'IVO Tips - Guidance for Intervention Orders in Victoria | Sesame Legal';
const pageDescription =
    'Providing the community with practical tips and guidance for navigating Intervention Orders (IVO) in Victoria.';
const imageUrl =
    'https://www.sesamelegal.com/social-preview-1200x630.png';

export default function IvoTipLanding() {
    // Markup
    return (
        <div className={styles.page}>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={pageUrl} />

                <meta property="og:title" content={pageTitle} />
                <meta
                    property="og:description"
                    content={pageDescription}
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:site_name" content="Sesame Legal" />
                <meta property="og:image" content={imageUrl} />

                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />
                <meta name="twitter:title" content={pageTitle} />
                <meta
                    name="twitter:description"
                    content={pageDescription}
                />
                <meta name="twitter:image" content={imageUrl} />
            </Head>

            <main
                className={styles.main}
                aria-labelledby="ivo-tips-heading"
            >
                <section className={styles.header}>
                    <div className={styles.inner}>
                        <p className={styles.eyebrow}>
                            Resources
                        </p>

                        <h1
                            id="ivo-tips-heading"
                            className={styles.title}
                        >
                            IVO Tips
                        </h1>

                        <p className={styles.description}>
                            Practical guidance for people navigating
                            Intervention Orders in Victoria, including
                            the application process, court support,
                            community support, and what to expect
                            along the way.
                        </p>
                    </div>
                </section>

                <section
                    className={styles['tips-container']}
                    aria-labelledby="other-ivo-tips-heading"
                >
                    <h2
                        id="other-ivo-tips-heading"
                        className={styles['sr-only']}
                    >
                        Other IVO tips
                    </h2>

                    {tips.map((tip) => (
                        <Link
                            key={tip.slug}
                            href={`/ivotips/${tip.slug}`}
                            className={styles['tip-section']}
                            aria-labelledby={`tip-${tip.slug}`}
                            aria-describedby={`tip-desc-${tip.slug}`}
                        >
                            <h3 id={`tip-${tip.slug}`}>
                                {tip.title}
                            </h3>

                            <p id={`tip-desc-${tip.slug}`}>
                                {tip.description}
                            </p>
                        </Link>
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
}