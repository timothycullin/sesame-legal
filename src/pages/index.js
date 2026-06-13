// Imports
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Internal components
import Footer from '../components/Footer';
import BlogIcon from '../components/icons/BlogIcon';
import BailApplicationsIcon from '../components/icons/BailApplicationsIcon';
import IVOTipsIcon from '../components/icons/IvoTipsIcon';

// Local styles
import styles from './home.module.css';

// Logic
export default function Home() {
    const pageUrl = 'https://www.sesamelegal.com/';
    const pageTitle = 'Legal Services | Sesame Legal';
    const pageDescription =
        'Sesame Legal provides legal services and clear, practical guidance across a range of legal matters.';
    const imageUrl = 'https://www.sesamelegal.com/social-preview-1200x630.png';

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
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
            </Head>

            <div className={styles.main}>
                <section className={styles.hero} aria-labelledby="home-title">
                    <h1 id="home-title" className={styles.title}>
                        Clear legal services,
                        <br />
                        kept direct.
                    </h1>

                    <p className={styles.intro}>
                        Legal services and practical guidance, delivered clearly and directly.
                    </p>

                    <div className={styles['author-card']}>
                        <Image
                            src="/tim-cullin-author.jpg"
                            alt="Tim Cullin"
                            width={160}
                            height={160}
                            className={styles['author-image']}
                            priority
                        />

                        <div>
                            <p className={styles['author-kicker']}>By Tim Cullin</p>
                            <p className={styles['author-text']}>
                                Practical legal information from a Victorian lawyer.
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    className={styles['portal-section']}
                    aria-labelledby="portal-heading"
                >
                    <div className={styles['section-heading']}>
                        <h2 id="portal-heading" className={styles['section-title']}>
                            Choose a section
                        </h2>
                    </div>

                    <div className={styles['portal-panels']}>
                        <Link
                            href="/bail-applications"
                            className={styles.panel}
                            aria-label="Bail Applications guide for understanding bail in Victoria"
                        >
                            <div className={styles['panel-top']}>
                                <div className={styles['panel-icon']}>
                                    <BailApplicationsIcon width={44} height={44} aria-hidden="true" />
                                </div>

                                <p className={styles['panel-kicker']}>Guide</p>
                            </div>

                            <div className={styles['panel-body']}>
                                <h3 className={styles['panel-title']}>Bail Applications</h3>

                                <p className={styles['panel-text']}>
                                    A practical guide to bail in Victoria, including bail tests,
                                    unacceptable risk, bail conditions, and what happens if bail is refused.
                                </p>
                            </div>

                            <span className={styles['panel-link']}>Read Bail Guide →</span>
                        </Link>

                        <Link
                            href="/ivotips"
                            className={styles.panel}
                            aria-label="IVO Tips for practical guidance on Intervention Orders in Victoria"
                        >
                            <div className={styles['panel-top']}>
                                <div className={styles['panel-icon']}>
                                    <IVOTipsIcon width={44} height={44} aria-hidden="true" />
                                </div>

                                <p className={styles['panel-kicker']}>Guide</p>
                            </div>

                            <div className={styles['panel-body']}>
                                <h3 className={styles['panel-title']}>IVO Tips</h3>

                                <p className={styles['panel-text']}>
                                    Step-by-step guidance and practical resources for navigating
                                    Intervention Orders in Victoria.
                                </p>
                            </div>

                            <span className={styles['panel-link']}>Explore IVO Tips →</span>
                        </Link>

                        <Link
                            href="/blog"
                            className={styles.panel}
                            aria-label="Blog for legal commentary and analysis"
                        >
                            <div className={styles['panel-top']}>
                                <div className={styles['panel-icon']}>
                                    <BlogIcon width={44} height={44} aria-hidden="true" />
                                </div>

                                <p className={styles['panel-kicker']}>Commentary</p>
                            </div>

                            <div className={styles['panel-body']}>
                                <h3 className={styles['panel-title']}>Blog</h3>

                                <p className={styles['panel-text']}>
                                    Insights and analysis on law, rights, justice, and public issues
                                    in Australia and beyond.
                                </p>
                            </div>

                            <span className={styles['panel-link']}>Read the Blog →</span>
                        </Link>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}