// Imports
import Head from 'next/head';

import Footer from '../../components/Footer';
import PostList from '../../components/blog/PostList';
import PageShell from '../../components/PageShell';

import { posts } from '../../data/posts';

import styles from './blog.module.css';

// Logic
export default function BlogLanding() {
    const pageUrl = 'https://www.sesamelegal.com/blog';
    const imageUrl =
        'https://www.sesamelegal.com/social-preview-1200x630.png';
    const seoTitle = 'Blog | Victorian Legal Information | Sesame Legal';
    const seoDescription =
        'Clear, practical commentary and information on Victorian law and related legal issues.';

    // Markup
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
                <meta property="og:site_name" content="Sesame Legal" />
                <meta property="og:image" content={imageUrl} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoTitle} />
                <meta
                    name="twitter:description"
                    content={seoDescription}
                />
                <meta name="twitter:image" content={imageUrl} />
            </Head>

            <PageShell aria-labelledby="blog-page-title">
                <header className={styles['blog-page-header']}>
                    <p className={styles['blog-page-kicker']}>
                        Legal commentary
                    </p>

                    <h1
                        id="blog-page-title"
                        className={styles['blog-page-title']}
                    >
                        Blog
                    </h1>

                    <p className={styles['blog-page-intro']}>
                        Clear, practical commentary and information on
                        Victorian law and related legal issues.
                    </p>
                </header>

                <PostList posts={posts} />
            </PageShell>

            <Footer />
        </div>
    );
}