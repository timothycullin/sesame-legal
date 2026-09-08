// Imports
import Head from 'next/head';
import Link from 'next/link';

import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';

import tips from '../../data/tips';

import styles from './tip-page.module.css';

// Logic
const SITE_URL = 'https://www.sesamelegal.com';

function getTipNumber(slug) {
    const index = tips.findIndex((tip) => tip.slug === slug);

    return String(index + 1).padStart(2, '0');
}

export async function getStaticPaths() {
    const paths = tips.map((tip) => ({
        params: {
            slug: tip.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const tip = tips.find((tip) => tip.slug === params.slug);

    if (!tip) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            tip,
        },
    };
}

export default function TipPage({ tip }) {
    const otherTips = tips.filter(
        (otherTip) => otherTip.slug !== tip.slug
    );

    const tipUrl = `${SITE_URL}/ivotips/${tip.slug}`;
    const pageTitle = `${tip.title} - IVO Tips | Sesame Legal`;
    const description =
        tip.description ||
        `Practical guidance on Intervention Orders in Victoria: ${tip.title}`;
    const imageUrl =
        `${SITE_URL}/social-preview-1200x630.png`;

    // Markup
    return (
        <div className={styles.page}>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={tipUrl} />

                <meta property="og:title" content={pageTitle} />
                <meta
                    property="og:description"
                    content={description}
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={tipUrl} />
                <meta property="og:site_name" content="Sesame Legal" />
                <meta property="og:image" content={imageUrl} />

                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />
                <meta
                    name="twitter:title"
                    content={pageTitle}
                />
                <meta
                    name="twitter:description"
                    content={description}
                />
                <meta
                    name="twitter:image"
                    content={imageUrl}
                />
            </Head>

            <main
                className={styles.main}
                aria-labelledby="tip-title"
            >
                <div className={styles['back-row']}>
                    <BackButton href="/ivotips">
                        Back to IVO Tips
                    </BackButton>
                </div>

                <article className={styles['tip-article']}>
                    <header className={styles['tip-header']}>
                        <p className={styles['tip-kicker']}>
                            IVO Tips
                        </p>

                        <h1
                            id="tip-title"
                            className={styles['tip-title']}
                        >
                            {tip.title}
                        </h1>

                        {tip.description && (
                            <p className={styles['tip-description']}>
                                {tip.description}
                            </p>
                        )}
                    </header>

                    <div
                        className={styles['tip-full-content']}
                        dangerouslySetInnerHTML={{
                            __html: tip.content,
                        }}
                    />
                </article>

                {otherTips.length > 0 && (
                    <nav
                        className={styles['tip-nav']}
                        aria-labelledby="other-tips-title"
                    >
                        <div className={styles['tip-nav-heading']}>
                            <p className={styles['tip-nav-kicker']}>
                                More guides
                            </p>

                            <h2
                                id="other-tips-title"
                                className={styles['tip-nav-title']}
                            >
                                Other IVO tips
                            </h2>
                        </div>

                        <ul className={styles['tip-nav-list']}>
                            {otherTips.map((otherTip) => (
                                <li key={otherTip.slug}>
                                    <Link
                                        href={`/ivotips/${otherTip.slug}`}
                                        className={styles['tip-nav-link']}
                                    >
                                        <span
                                            className={
                                                styles['tip-nav-number']
                                            }
                                            aria-hidden="true"
                                        >
                                            {getTipNumber(otherTip.slug)}
                                        </span>

                                        <span
                                            className={
                                                styles['tip-nav-text']
                                            }
                                        >
                                            {otherTip.title}
                                        </span>

                                        <span
                                            className={
                                                styles['tip-nav-arrow']
                                            }
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </main>

            <Footer />
        </div>
    );
}