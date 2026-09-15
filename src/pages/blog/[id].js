// Imports
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';
import AppImage from '../../components/AppImage';
import BlogContent from '../../components/blog/BlogContent';
import ShareButtons from '../../components/blog/ShareButtons';

import { posts } from '../../data/posts';

import styles from './BlogPostPage.module.css';

// Logic
const SITE_URL = 'https://www.sesamelegal.com';

export async function getStaticPaths() {
    const paths = posts.map((post) => ({
        params: {
            id: post.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post =
        posts.find((post) => post.slug === params.id) || null;

    return {
        props: {
            post,
        },
        revalidate: 10,
    };
}

export default function BlogPost({ post }) {
    const router = useRouter();

    if (!post) {
        return (
            <div className={styles.page}>
                <main className={styles.main}>
                    <p className={styles.message}>
                        Post not found.
                    </p>
                </main>
            </div>
        );
    }

    const formattedDate = new Date(post.date).toLocaleDateString(
        'en-AU',
        {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }
    );

    const postTitle = `${post.title} | Blog | Sesame Legal`;
    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    const seoDescription =
        post.excerpt ||
        'Clear, practical legal information on Victorian law from Sesame Legal.';
    const seoImage = post.imageUrl
        ? `${SITE_URL}${post.imageUrl}`
        : `${SITE_URL}/social-preview-1200x630.png`;

    const fromHref =
        typeof router.query.from === 'string' &&
            router.query.from.startsWith('/')
            ? router.query.from
            : null;

    const backHref = fromHref || '/blog';

    const currentArticleHref = fromHref
        ? `/blog/${post.slug}?from=${encodeURIComponent(fromHref)}`
        : `/blog/${post.slug}`;

    const authorSlug = post.author
        .toLowerCase()
        .replace(/\s+/g, '-');

    const resolvedAuthorSlug =
        post.authorSlug || authorSlug;

    const authorHref = {
        pathname: `/author/${resolvedAuthorSlug}`,
        query: {
            from: currentArticleHref,
        },
    };

    // Markup
    return (
        <div className={styles.page}>
            <Head>
                <title>{postTitle}</title>
                <meta
                    name="description"
                    content={seoDescription}
                />
                <link rel="canonical" href={postUrl} />

                <meta
                    property="og:title"
                    content={postTitle}
                />
                <meta
                    property="og:description"
                    content={seoDescription}
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={postUrl} />
                <meta
                    property="og:site_name"
                    content="Sesame Legal"
                />
                <meta property="og:image" content={seoImage} />

                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />
                <meta
                    name="twitter:title"
                    content={postTitle}
                />
                <meta
                    name="twitter:description"
                    content={seoDescription}
                />
                <meta
                    name="twitter:image"
                    content={seoImage}
                />
            </Head>

            <main className={styles.main}>
                <div className={styles['back-row']}>
                    <BackButton href={backHref}>
                        Back
                    </BackButton>
                </div>

                <article
                    className={styles.article}
                    aria-labelledby="blog-post-title"
                >
                    <header
                        className={styles['blog-post-header']}
                    >
                        {post.imageUrl && (
                            <div
                                className={
                                    styles['post-thumbnail-single']
                                }
                            >
                                <AppImage
                                    src={post.imageUrl}
                                    alt={`Thumbnail for ${post.title}`}
                                />
                            </div>
                        )}

                        <div className={styles['post-info']}>
                            <p
                                className={
                                    styles['post-meta-label']
                                }
                            >
                                Blog
                            </p>

                            <h1
                                id="blog-post-title"
                                className={
                                    styles['post-title']
                                }
                            >
                                {post.title}
                            </h1>

                            <div
                                className={styles['post-meta']}
                            >
                                <p
                                    className={
                                        styles['post-date']
                                    }
                                >
                                    {formattedDate}
                                </p>

                                <p
                                    className={
                                        styles['post-author']
                                    }
                                >
                                    By{' '}
                                    <Link href={authorHref}>
                                        {post.author}
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </header>

                    <BlogContent
                        excerpt={post.excerpt}
                        content={post.content}
                    />

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

                        <ShareButtons
                            postUrl={postUrl}
                            postTitle={post.title}
                        />
                    </section>
                </article>
            </main>

            <Footer />
        </div>
    );
}