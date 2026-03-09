// Framework
import Head from 'next/head';

// Shared components
import Footer from '../../components/Footer';

// Blog components
import BlogPageHeader from '../../components/blog/BlogPageHeader';
import PostList from '../../components/blog/PostList';

// Data
import { posts } from '../../data/posts';

export default function BlogLanding() {

    // Markup
    return (
        <div className="page-container">

            {/* SEO */}
            <Head>

                {/* Primary */}
                <title>Blog – Human Rights Insights in Australia and Around the World</title>
                <meta
                    name="description"
                    content="Explore in-depth insights on human rights developments, principles, and practice in Australia and globally."
                />
                <link rel="canonical" href="https://www.sesamelegal.com/blog" />

                {/* Open Graph */}
                <meta property="og:title" content="Blog – Human Rights Insights in Australia and Around the World" />
                <meta property="og:description" content="Explore in-depth insights on human rights developments, principles, and practice in Australia and globally." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.sesamelegal.com/social-preview-1200x630.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog – Human Rights Insights in Australia and Around the World" />
                <meta name="twitter:description" content="Explore in-depth insights on human rights developments, principles, and practice in Australia and globally." />
                <meta name="twitter:image" content="https://www.sesamelegal.com/social-preview-1200x630.png" />

            </Head>

            <main>
                <BlogPageHeader />
                <PostList posts={posts} />
            </main>

            <Footer />
        </div>
    );
}