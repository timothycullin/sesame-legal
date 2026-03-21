import Head from 'next/head';
import { useRouter } from 'next/router';

import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';
import AuthorHeader from '../../components/author/AuthorHeader';
import AuthorBio from '../../components/author/AuthorBio';
import PostList from '../../components/blog/PostList';

import { posts } from '../../data/posts';

import styles from './AuthorPage.module.css';

export default function AuthorPage({
    authorPosts,
    authorName,
    authorBio,
    authorImage,
    authorSlug,
}) {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <div className={styles.page}>
                <main className={styles.main}>
                    <p className={styles.message}>Loading author...</p>
                </main>
            </div>
        );
    }

    const pageUrl = `https://www.sesamelegal.com/author/${authorSlug}`;
    const seoTitle = `${authorName} | Author | Sesame Legal`;
    const seoDescription = authorBio
        ? `Read articles and commentary by ${authorName} on Sesame Legal.`
        : `Read articles by ${authorName} on Sesame Legal.`;
    const seoImage = authorImage
        ? `https://www.sesamelegal.com${authorImage}`
        : 'https://www.sesamelegal.com/social-preview-1200x630.png';

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
                    <BackButton href={router.query.from || '/blog'}>← Back</BackButton>
                </div>

                <section className={styles['author-section']} aria-labelledby="author-page-title">
                    <AuthorHeader
                        name={authorName}
                        image={authorImage}
                    />

                    <AuthorBio bio={authorBio} />
                </section>

                <section className={styles['posts-section']} aria-label={`Posts by ${authorName}`}>
                    <PostList posts={authorPosts || []} />
                </section>
            </main>

            <Footer />
        </div>
    );
}

// Static paths
export async function getStaticPaths() {
    const slugs = Array.from(new Set(posts.map((post) => post.authorSlug)));
    const paths = slugs.map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: true,
    };
}

// Static props
export async function getStaticProps({ params }) {
    const authorSlug = params.slug;
    const authorPosts = posts.filter((post) => post.authorSlug === authorSlug);

    if (!authorPosts.length) {
        return { notFound: true };
    }

    const authorName = authorPosts[0].author;

    const authorBioData = {
        'tim-cullin': 'Tim Cullin is a lawyer focusing on human rights.',
    };

    const authorImageData = {
        'tim-cullin': '/tim-cullin.jpg',
    };

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