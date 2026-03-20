// External / framework imports
import Head from 'next/head';
import Link from 'next/link';

// Internal components
import Footer from '../components/Footer';
import BlogIcon from '../components/BlogIcon';
import IVOTipsIcon from '../components/IvoTipsIcon';

// Local styles
import styles from './home.module.css';

// Logic
export default function Home() {
    // Markup
    return (
        <div className="page-container">
            <Head>
                <title>Sesame Legal – Legal Guidance & Commentary</title>
                <meta
                    name="description"
                    content="Sesame Legal provides clear legal guidance and commentary in a direct and accessible format."
                />
                <link rel="canonical" href="https://www.sesamelegal.com/" />
            </Head>

            <main className={styles.home}>
                <section className={styles.hero} aria-labelledby="home-title">
                    <h1 id="home-title" className={styles.title}>
                        Clear legal guidance,
                        <br />
                        kept direct.
                    </h1>

                    <p className={styles.intro}>
                        Practical guidance and legal commentary, presented in a direct and accessible way.
                    </p>
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
                            href="/ivotips"
                            className={styles.panel}
                            aria-label="IVO Tips for practical guidance on Intervention Orders in Victoria"
                        >
                            <div className={styles['panel-head']}>
                                <div className={styles['panel-icon']}>
                                    <IVOTipsIcon width={52} height={52} aria-hidden="true" />
                                </div>
                                <span className={styles['panel-tag']}>Guidance</span>
                            </div>

                            <div className={styles['panel-body']}>
                                <h3 className={styles['panel-title']}>IVO Tips</h3>

                                <p className={styles['panel-text']}>
                                    Step-by-step guidance and practical resources for navigating
                                    Intervention Orders in Victoria.
                                </p>
                            </div>

                            <span className={styles['panel-link']}>Explore IVO Tips</span>
                        </Link>

                        <Link
                            href="/blog"
                            className={styles.panel}
                            aria-label="Blog for legal commentary and analysis"
                        >
                            <div className={styles['panel-head']}>
                                <div className={styles['panel-icon']}>
                                    <BlogIcon width={52} height={52} aria-hidden="true" />
                                </div>
                                <span className={styles['panel-tag']}>Commentary</span>
                            </div>

                            <div className={styles['panel-body']}>
                                <h3 className={styles['panel-title']}>Blog</h3>

                                <p className={styles['panel-text']}>
                                    Insights and analysis on law, rights, justice, and public issues in
                                    Australia and beyond.
                                </p>
                            </div>

                            <span className={styles['panel-link']}>Read the Blog</span>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}