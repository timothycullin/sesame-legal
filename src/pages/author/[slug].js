import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { posts } from '../../data/posts';
import PostList from '../../components/blog/PostList';
import Head from 'next/head';
import BackButton from '../../components/BackButton';
import AuthorHeader from '../../components/author/AuthorHeader';
import AuthorBio from '../../components/author/AuthorBio';

export default function AuthorPage({ authorPosts, authorName, authorBio, authorImage, authorSlug }) {
    const router = useRouter();

    if (router.isFallback) return <div>Loading author...</div>;

    return (
        <div className="page-container">
            {/* Minimal self-contained SEO */}
            <Head>
                <title>{authorName} | Sesame Blog</title>
                <meta
                    name="description"
                    content={`Read articles by ${authorName} on human rights on Sesame Blog.`}
                />
                <link
                    rel="canonical"
                    href={`https://www.sesamelegal.com/author/${authorSlug}`}
                />
                {authorImage && (
                    <meta
                        property="og:image"
                        content={`https://www.sesamelegal.com${authorImage}`}
                    />
                )}
            </Head>

            <Navbar />

            <main>
                {/* Back button */}
                <BackButton href={router.query.from || '/blog'}>← Back</BackButton>

                {/* Author info */}
                <AuthorHeader name={authorName} image={authorImage} />
                <AuthorBio bio={authorBio} />

                {/* Posts by author */}
                <PostList posts={authorPosts || []} />
            </main>

            <Footer />
        </div>
    );
}

// Static paths
export async function getStaticPaths() {
    const slugs = Array.from(new Set(posts.map(post => post.authorSlug)));
    const paths = slugs.map(slug => ({ params: { slug } }));
    return { paths, fallback: true };
}

// Static props
export async function getStaticProps({ params }) {
    const authorSlug = params.slug;
    const authorPosts = posts.filter(post => post.authorSlug === authorSlug);

    if (!authorPosts.length) {
        return { notFound: true };
    }

    const authorName = authorPosts[0].author;

    const authorBioData = {
        'tim-cullin':
            "Tim Cullin is a lawyer focusing on human rights.",
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
