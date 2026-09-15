// index.js

// Imports
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Footer from '../components/Footer';
import AppImage from '../components/AppImage';
import Totem from '../components/Totem';

import { posts } from '../data/posts';

import styles from './home.module.css';

// Logic
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-AU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export default function Home() {
    const pageUrl = 'https://www.sesamelegal.com/';
    const pageTitle = 'Victorian Legal Information | Sesame Legal';
    const pageDescription =
        'Clear, practical legal information on Victorian law, with commentary, resources and practical guides across a range of legal issues.';
    const imageUrl =
        'https://www.sesamelegal.com/social-preview-1200x630.png';

    const latestPost = [...posts].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    )[0];

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
                        with commentary, resources and practical guides.
                    </p>

                    <div className={styles['hero-landscape']}>
                        <AppImage
                            src="/victorian-countryside.jpg"
                            alt="Victorian countryside with a wagon wheel and butterflies"
                            loading="eager"
                            objectPosition="center"
                            sizes="(max-width: 48rem) calc(100vw - 2rem), 46rem"
                        />
                    </div>

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
                        />

                        <div className={styles['author-content']}>
                            <p className={styles['author-kicker']}>
                                By Tim Cullin
                            </p>

                            <p className={styles['author-text']}>
                                Victorian lawyer with an interest in clear,
                                practical legal information.
                            </p>

                            <span className={styles['author-link']}>
                                View author profile →
                            </span>
                        </div>
                    </Link>
                </section>

                {latestPost && (
                    <section
                        className={styles['latest-section']}
                        aria-label="Latest article"
                    >
                        <Link
                            href={{
                                pathname: `/blog/${latestPost.slug}`,
                                query: { from: '/' },
                            }}
                            className={styles['latest-link']}
                            aria-label={`Read latest article: ${latestPost.title}`}
                        >
                            <div className={styles['latest-content']}>
                                <p className={styles['latest-label']}>
                                    Latest article
                                </p>

                                <h2 className={styles['latest-title']}>
                                    {latestPost.title}
                                </h2>

                                <div className={styles['latest-meta']}>
                                    <span>{formatDate(latestPost.date)}</span>

                                    {latestPost.author && (
                                        <>
                                            <span
                                                className={
                                                    styles['meta-separator']
                                                }
                                            >
                                                •
                                            </span>
                                            <span>
                                                By {latestPost.author}
                                            </span>
                                        </>
                                    )}
                                </div>

                                {latestPost.excerpt && (
                                    <p className={styles['latest-excerpt']}>
                                        {latestPost.excerpt}
                                    </p>
                                )}

                                <span className={styles['latest-read']}>
                                    Read article →
                                </span>
                            </div>

                            {latestPost.imageUrl && (
                                <div className={styles['latest-thumbnail']}>
                                    <AppImage
                                        src={latestPost.imageUrl}
                                        alt={`Thumbnail for ${latestPost.title}`}
                                        sizes="(max-width: 48rem) 6rem, 8rem"
                                    />
                                </div>
                            )}
                        </Link>
                    </section>
                )}

                <section
                    className={styles['portal-section']}
                    aria-labelledby="portal-heading"
                >
                    <div className={styles['section-heading']}>
                        <h2
                            id="portal-heading"
                            className={styles['section-title']}
                        >
                            Explore
                        </h2>

                        <p className={styles['section-intro']}>
                            Practical resources and commentary on Victorian law.
                        </p>
                    </div>

                    <div className={styles['portal-panels']}>
                        <Link
                            href="/ivotips"
                            className={`${styles.panel} ${styles['panel-guide']}`}
                            aria-label="IVO Tips for practical guidance on Intervention Orders in Victoria"
                        >
                            <div className={styles['panel-header']}>
                                <p className={styles['panel-kicker']}>
                                    Practical guide
                                </p>

                                <div className={styles['panel-icon']}>
                                    <Totem
                                        className={styles['panel-totem']}
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>

                            <div className={styles['panel-body']}>
                                <h3 className={styles['panel-title']}>
                                    IVO Tips
                                </h3>

                                <p className={styles['panel-text']}>
                                    Practical information and step-by-step
                                    guidance for people navigating Intervention
                                    Order matters in Victoria.
                                </p>
                            </div>

                            <div className={styles['panel-footer']}>
                                <span>Explore IVO Tips</span>
                                <span
                                    className={styles['panel-arrow']}
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </div>
                        </Link>

                        <Link
                            href="/blog"
                            className={`${styles.panel} ${styles['panel-blog']}`}
                            aria-label="Blog about Victorian law and related legal issues"
                        >
                            <div className={styles['panel-header']}>
                                <p className={styles['panel-kicker']}>
                                    Legal commentary
                                </p>

                                <div className={styles['panel-icon']}>
                                    <Totem
                                        className={styles['panel-totem']}
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>

                            <div className={styles['panel-body']}>
                                <h3 className={styles['panel-title']}>
                                    Blog
                                </h3>

                                <p className={styles['panel-text']}>
                                    Practical commentary and analysis on
                                    Victorian law and related legal issues.
                                </p>
                            </div>

                            <div className={styles['panel-footer']}>
                                <span>Read the Blog</span>
                                <span
                                    className={styles['panel-arrow']}
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}