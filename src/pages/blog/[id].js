// Framework
import Head from 'next/head';
import Link from 'next/link';

// Shared components
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';
import AppImage from '../../components/AppImage';

// Blog components
import BlogContent from '../../components/blog/BlogContent';
import ShareButtons from '../../components/blog/ShareButtons';

// Data
import { posts } from '../../data/posts';

// Local styles
import styles from './BlogPostPage.module.css';

// Logic
export default function BlogPost({ post }) {
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
    const seoDescription = post.excerpt || 'Read this blog post on Sesame Legal.';
    const seoImage = post.imageUrl
        ? `https://www.sesamelegal.com${post.imageUrl}`
        : 'https://www.sesamelegal.com/social-preview-1200x630.png';
    const authorSlug = post.author.toLowerCase().replace(/\s+/g, '-');
    const authorHref =
        post.authorSlug
            ? `/author/${post.authorSlug}?from=/blog/${post.slug}`
            : `/author/${authorSlug}?from=/blog/${post.slug}`;

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

                <article className={styles.article} aria-labelledby="blog-post-title">
                    <header className={styles['blog-post-header']}>
                        {post.imageUrl && (
                            <div className={styles['post-thumbnail-single']}>
                                <AppImage
                                    src={post.imageUrl}
                                    alt={`Thumbnail for ${post.title}`}
                                />
                            </div>
                        )}

                        <div className={styles['post-info']}>
                            <p className={styles['post-meta-label']}>Blog</p>

                            <h1 id="blog-post-title" className={styles['post-title']}>
                                {post.title}
                            </h1>

                            <div className={styles['post-meta']}>
                                <p className={styles['post-date']}>{formattedDate}</p>

                                <p className={styles['post-author']}>
                                    By <Link href={authorHref}>{post.author}</Link>
                                </p>
                            </div>
                        </div>
                    </header>

                    <BlogContent excerpt={post.excerpt} content={post.content} />

                    <section
                        className={styles['share-section']}
                        aria-labelledby="share-title"
                    >
                        <h2 id="share-title" className={styles['share-title']}>
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
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = posts.find((p) => p.slug === params.id) || null;

    return {
        props: { post },
        revalidate: 10,
    };
}