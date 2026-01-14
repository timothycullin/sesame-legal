import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { posts } from '../../data/posts';
import BlogHeader from '../../components/blog/BlogHeader';
import BlogContent from '../../components/blog/BlogContent';
import ShareButtons from '../../components/blog/ShareButtons';
import BackButton from '../../components/BackButton';

export default function BlogPost({ post }) {
    const router = useRouter();

    if (router.isFallback) return <div>Loading post...</div>;
    if (!post) return <div>Post not found</div>;

    const formattedDate = new Date(post.date).toLocaleDateString('en-AU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    // ✅ Updated domain (replaced vercel.app)
    const postUrl = `https://sesamelegal.com/blog/${post.slug}`;

    return (
        <div className="page-container">
            <SEO
                title={`${post.title} | Sesame Blog`}
                description={post.excerpt || "Read this blog post on human rights on Sesame Blog"}
                image={post.imageUrl ? `https://sesamelegal.com${post.imageUrl}` : null}
                url={postUrl}
            />

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
