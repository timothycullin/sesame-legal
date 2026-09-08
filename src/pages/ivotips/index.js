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
                <header className={styles.header}>
                    <p className={styles.eyebrow}>
                        Practical resources
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
                </header>

                <section
                    className={styles['tips-container']}
                    aria-labelledby="guides-heading"
                >
                    <div className={styles['tips-heading']}>
                        <h2
                            id="guides-heading"
                            className={styles['tips-title']}
                        >
                            Browse the guides
                        </h2>

                        <p className={styles['tips-intro']}>
                            Select a topic for practical information and
                            guidance.
                        </p>
                    </div>

                    <div className={styles['tips-list']}>
                        {tips.map((tip, index) => (
                            <Link
                                key={tip.slug}
                                href={`/ivotips/${tip.slug}`}
                                className={styles['tip-section']}
                                aria-labelledby={`tip-${tip.slug}`}
                                aria-describedby={
                                    tip.description
                                        ? `tip-desc-${tip.slug}`
                                        : undefined
                                }
                            >
                                <span
                                    className={styles['tip-number']}
                                    aria-hidden="true"
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <div className={styles['tip-content']}>
                                    <h3 id={`tip-${tip.slug}`}>
                                        {tip.title}
                                    </h3>

                                    {tip.description && (
                                        <p id={`tip-desc-${tip.slug}`}>
                                            {tip.description}
                                        </p>
                                    )}
                                </div>

                                <span
                                    className={styles['tip-arrow']}
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}