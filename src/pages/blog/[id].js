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

    // ✅ Updated domain to use www for canonical and sharing
    const postUrl = `https://www.sesamelegal.com/blog/${post.slug}`;

    // ✅ Fallback image if post.imageUrl is missing
    const seoImage = post.imageUrl
        ? `https://www.sesamelegal.com${post.imageUrl}`
        : 'https://www.sesamelegal.com/social-preview-1200x630.png';

    return (
        <div className="page-container">
            <SEO
                title={`${post.title} | Sesame Blog`}
                description={post.excerpt || "Read this blog post on human rights on Sesame Blog"}
                image={seoImage}
                url={postUrl}
                canonical={postUrl} // explicitly set canonical
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
