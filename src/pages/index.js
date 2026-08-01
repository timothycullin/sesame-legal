// Imports
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Internal components
import Footer from '../components/Footer';
import BlogIcon from '../components/icons/BlogIcon';
import IVOTipsIcon from '../components/icons/IvoTipsIcon';

// Local styles
import styles from './home.module.css';

// Logic
export default function Home() {
    const pageUrl = 'https://www.sesamelegal.com/';
    const pageTitle =
        'Legal Information | Commercial, Property, Wills & Estates | Sesame Legal';
    const pageDescription =
        'Clear, practical legal information on Victorian law, including commercial and property law, wills and estates.';
    const imageUrl =
        'https://www.sesamelegal.com/social-preview-1200x630.png';

    // Markup
    return (
        <div className={styles.page}>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={pageUrl} />

                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:site_name" content="Sesame Legal" />
                <meta property="og:image" content={imageUrl} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta
                    name="twitter:description"
                    content={pageDescription}
                />
                <meta name="twitter:image" content={imageUrl} />
            </Head>

            <main className={styles.main}>
                <section
                    className={styles.hero}
                    aria-labelledby="home-title"
                >
                    <h1 id="home-title" className={styles.title}>
                        Legal information,
                        <br />
                        clear and direct.
                    </h1>

                    <p className={styles.intro}>
                        Clear, practical legal information on Victorian law,
                        including commercial and property law, wills and
                        estates.
                    </p>

                    <Link
                        href="/author/tim-cullin?from=/"
                        className={styles['author-card']}
                        aria-label="View Tim Cullin’s author profile and articles"
                    >
                        <Image
                            src="/tim-cullin-author.jpg"
                            alt="Tim Cullin"
                            width={160}
                            height={160}
                            className={styles['author-image']}
                            priority
                        />

                        <div>
                            <p className={styles['author-kicker']}>
                                By Tim Cullin
                            </p>

                            <p className={styles['author-text']}>
                                Victorian lawyer focused on commercial and
                                property law, including commercial
                                transactions, wills and estates.
                            </p>

                            <span className={styles['author-link']}>
                                View author profile →
                            </span>
                        </div>
                    </Link>
                </section>

                <section
                    className={styles['portal-section']}
                    aria-labelledby="portal-heading"
                >
                    <div className={styles['section-heading']}>
                        <h2
                            id="portal-heading"
                            className={styles['section-title']}
                        >
                            Choose a section
                        </h2>
                    </div>

                    <div className={styles['portal-panels']}>
                        <Link
                            href="/blog"
                            className={`${styles.panel} ${styles['panel-primary']}`}
                            aria-label="Blog about Victorian legal issues, commercial and property law, wills and estates"
                        >
                            <div className={styles['panel-top']}>
                                <div className={styles['panel-icon']}>
                                    <BlogIcon
                                        width={52}
                                        height={52}
                                        aria-hidden="true"
                                    />
                                </div>

                                <p className={styles['panel-kicker']}>
                                    Legal commentary
                                </p>
                            </div>

                            <div className={styles['panel-body']}>
                                <h3 className={styles['panel-title']}>
                                    Blog
                                </h3>

                                <p className={styles['panel-text']}>
                                    Practical commentary on Victorian legal
                                    issues, commercial and property law, wills
                                    and estates.
                                </p>
                            </div>

                            <span className={styles['panel-link']}>
                                Read the Blog →
                            </span>
                        </Link>

                        <Link
                            href="/ivotips"
                            className={styles.panel}
                            aria-label="IVO Tips for practical guidance on Intervention Orders in Victoria"
                        >
                            <div className={styles['panel-top']}>
                                <div className={styles['panel-icon']}>
                                    <IVOTipsIcon
                                        width={44}
                                        height={44}
                                        aria-hidden="true"
                                    />
                                </div>

                                <p className={styles['panel-kicker']}>
                                    Guide
                                </p>
                            </div>

                            <div className={styles['panel-body']}>
                                <h3 className={styles['panel-title']}>
                                    IVO Tips
                                </h3>

                                <p className={styles['panel-text']}>
                                    Step-by-step guidance and practical
                                    resources for navigating Intervention Orders
                                    in Victoria.
                                </p>
                            </div>

                            <span className={styles['panel-link']}>
                                Explore IVO Tips →
                            </span>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}