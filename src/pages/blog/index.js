import Head from 'next/head';
import Header from '../../components/Header';
import PostList from '../../components/blog/PostList';
import Footer from '../../components/Footer';
import { posts } from '../../data/posts';

export default function BlogLanding() {
    return (
        <div className="page-container">
            {/* Minimal self-contained SEO */}
            <Head>
                <title>Sesame Blog – Human Rights Insights in Australia and Around the World</title>
                <meta
                    name="description"
                    content="Explore in-depth insights on human rights developments, principles, and practice in Australia and globally."
                />
                <link rel="canonical" href="https://www.sesamelegal.com/blog" />
                <meta property="og:title" content="Sesame Blog – Human Rights Insights in Australia and Around the World" />
                <meta property="og:description" content="Explore in-depth insights on human rights developments, principles, and practice in Australia and globally." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.sesamelegal.com/social-preview-1200x630.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sesame Blog – Human Rights Insights in Australia and Around the World" />
                <meta name="twitter:description" content="Explore in-depth insights on human rights developments, principles, and practice in Australia and globally." />
                <meta name="twitter:image" content="https://www.sesamelegal.com/social-preview-1200x630.png" />
            </Head>

            <main>
                <Header
                    title="Sesame Blog"
                    label="Legal Blog"
                    description="Human rights insights in Australia and around the world."
                />

                <PostList posts={posts} />
            </main>

            <Footer />
        </div>
    );
}
