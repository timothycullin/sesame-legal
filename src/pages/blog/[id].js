import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import BlogHeader from '../../components/blog/BlogHeader';
import BlogContent from '../../components/blog/BlogContent';
import ShareButtons from '../../components/blog/ShareButtons';
import BackButton from '../../components/BackButton';
import Head from 'next/head';
import { posts } from '../../data/posts';

export default function BlogPost({ post }) {
    const router = useRouter();

    if (router.isFallback) return <div>Loading post...</div>;
    if (!post) return <div>Post not found</div>;

    const formattedDate = new Date(post.date).toLocaleDateString('en-AU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const postUrl = `https://www.sesamelegal.com/blog/${post.slug}`;
    const seoImage = post.imageUrl
        ? `https://www.sesamelegal.com${post.imageUrl}`
        : 'https://www.sesamelegal.com/social-preview-1200x630.png';

    return (
        <div className="page-container">
            {/* Minimal self-contained SEO */}
            <Head>
                <title>{post.title} | Sesame Blog</title>
                <meta
                    name="description"
                    content={post.excerpt || "Read this blog post on human rights on Sesame Blog"}
                />
                <link rel="canonical" href={postUrl} />
                <meta property="og:title" content={`${post.title} | Sesame Blog`} />
                <meta property="og:description" content={post.excerpt || "Read this blog post on human rights on Sesame Blog"} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={seoImage} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${post.title} | Sesame Blog`} />
                <meta name="twitter:description" content={post.excerpt || "Read this blog post on human rights on Sesame Blog"} />
                <meta name="twitter:image" content={seoImage} />
            </Head>

            <main>
                <BackButton href="/blog">← Back to Blog</BackButton>

                <BlogHeader
                    title={post.title}
                    author={post.author}
                    date={formattedDate}
                    imageUrl={post.imageUrl}
                />
                <BlogContent excerpt={post.excerpt} content={post.content} />
                <ShareButtons postUrl={postUrl} postTitle={post.title} />
            </main>

            <Footer />
        </div>
    );
}

// -------------------- Static Generation -------------------- //

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
