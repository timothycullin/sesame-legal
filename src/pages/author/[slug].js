import Head from 'next/head';
import { useRouter } from 'next/router';

import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';
import AuthorHeader from '../../components/author/AuthorHeader';
import AuthorBio from '../../components/author/AuthorBio';
import PostList from '../../components/blog/PostList';

import { posts } from '../../data/posts';

import styles from './AuthorPage.module.css';

const SITE_URL = 'https://www.sesamelegal.com';

const authorBioData = {
    'tim-cullin': 'Tim Cullin is a lawyer practising in criminal defence, with an interest in advocacy and assisting clients through the legal system.',
};

const authorImageData = {
    'tim-cullin': '/tim-cullin-author.jpg',
};

export default function AuthorPage({
    authorPosts,
    authorName,
    authorBio,
    authorImage,
    authorSlug,
}) {
    const router = useRouter();

    const backHref =
        typeof router.query.from === 'string' && router.query.from.startsWith('/')
            ? router.query.from
            : '/blog';

    if (router.isFallback) {
        return (
            <div className={styles.page}>
                <main className={styles.main} aria-live="polite">
                    <p className={styles.message}>Loading author...</p>
                </main>
            </div>
        );
    }

    const pageUrl = `${SITE_URL}/author/${authorSlug}`;
    const seoTitle = `${authorName} | Author | Sesame Legal`;
    const seoDescription = `Read articles and commentary by ${authorName} on Sesame Legal.`;
    const seoImage = authorImage
        ? `${SITE_URL}${authorImage}`
        : `${SITE_URL}/social-preview-1200x630.png`;

    return (
        <div className={styles.page}>
            <Head>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={pageUrl} />

                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:type" content="profile" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={seoImage} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDescription} />
                <meta name="twitter:image" content={seoImage} />
            </Head>

            <main className={styles.main}>
                <div className={styles['back-row']}>
                    <BackButton href={backHref}>← Back</BackButton>
                </div>

                <section
                    className={styles['author-section']}
                    aria-labelledby="author-page-title"
                >
                    <AuthorHeader
                        id="author-page-title"
                        name={authorName}
                        image={authorImage}
                    />

                    <AuthorBio bio={authorBio} />
                </section>

                <section
                    className={styles['posts-section']}
                    aria-labelledby="author-posts-title"
                >
                    <h2 id="author-posts-title" className={styles['section-title']}>
                        Articles by {authorName}
                    </h2>

                    <PostList posts={authorPosts} />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export async function getStaticPaths() {
    const slugs = Array.from(new Set(posts.map((post) => post.authorSlug)));

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const authorSlug = params.slug;
    const authorPosts = posts.filter((post) => post.authorSlug === authorSlug);

    if (!authorPosts.length) {
        return { notFound: true };
    }

    const authorName = authorPosts[0].author;

    return {
        props: {
            authorPosts,
            authorName,
            authorBio: authorBioData[authorSlug] || '',
            authorImage: authorImageData[authorSlug] || '',
            authorSlug,
        },
        revalidate: 10,
    };
}