// Imports
import Head from 'next/head';

// Shared components
import Footer from '../../components/Footer';

// Blog components
import BlogPageHeader from '../../components/blog/BlogPageHeader';
import PostList from '../../components/blog/PostList';

// Data
import { posts } from '../../data/posts';

// Local styles
import styles from './blog.module.css';

// Logic
export default function BlogLanding() {
    const pageUrl = 'https://www.sesamelegal.com/blog';
    const seoTitle = 'Blog | Legal Commentary & Analysis | Sesame Legal';
    const seoDescription =
        'Explore legal commentary, analysis, and public-interest writing from Sesame Legal.';

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

            <main className={styles.main} aria-labelledby="blog-page-title">
                <BlogPageHeader />
                <PostList posts={posts} />
            </main>

            <Footer />
        </div>
    );
}