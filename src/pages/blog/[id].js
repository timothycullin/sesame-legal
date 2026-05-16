// Framework
import Head from 'next/head';
import { useRouter } from 'next/router';

// Shared components
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';

// Blog components
import BlogHeader from '../../components/blog/BlogHeader';
import BlogContent from '../../components/blog/BlogContent';
import ShareButtons from '../../components/blog/ShareButtons';

// Data
import { posts } from '../../data/posts';

// Local styles
import styles from './BlogPostPage.module.css';

// Logic
export default function BlogPost({ post }) {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <div className={styles.page}>
                <main className={styles.main} aria-live="polite">
                    <p className={styles.message}>Loading post...</p>
                </main>
            </div>
        );
    }

    if (!post) {
        return (
            <div className={styles.page}>
                <main className={styles.main}>
                    <p className={styles.message}>Post not found.</p>
                </main>
            </div>
        );
    }

    const formattedDate = new Date(post.date).toLocaleDateString('en-AU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const postTitle = `${post.title} | Blog | Sesame Legal`;
    const postUrl = `https://www.sesamelegal.com/blog/${post.slug}`;
    const seoDescription =
        post.excerpt || 'Read this blog post on Sesame Legal.';
    const seoImage = post.imageUrl
        ? `https://www.sesamelegal.com${post.imageUrl}`
        : 'https://www.sesamelegal.com/social-preview-1200x630.png';

    // Markup
    return (
        <div className={styles.page}>
            <Head>
                <title>{postTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={postUrl} />

                <meta property="og:title" content={postTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={postUrl} />
                <meta property="og:image" content={seoImage} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={postTitle} />
                <meta name="twitter:description" content={seoDescription} />
                <meta name="twitter:image" content={seoImage} />
            </Head>

            <main className={styles.main}>
                <div className={styles['back-row']}>
                    <BackButton href="/blog">← Back to Blog</BackButton>
                </div>

                <article
                    className={styles.article}
                    aria-labelledby="blog-post-title"
                >
                    <BlogHeader
                        title={post.title}
                        author={post.author}
                        date={formattedDate}
                        imageUrl={post.imageUrl}
                        titleId="blog-post-title"
                    />

                    <BlogContent excerpt={post.excerpt} content={post.content} />

                    <section
                        className={styles['share-section']}
                        aria-labelledby="share-title"
                    >
                        <h2
                            id="share-title"
                            className={styles['share-title']}
                        >
                            Share this article
                        </h2>

                        <ShareButtons postUrl={postUrl} postTitle={post.title} />
                    </section>
                </article>
            </main>

            <Footer />
        </div>
    );
}

// Static generation
export async function getStaticPaths() {
    const paths = posts.map((post) => ({
        params: { id: post.slug },
    }));

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const post = posts.find((p) => p.slug === params.id) || null;

    return {
        props: { post },
        revalidate: 10,
    };
}