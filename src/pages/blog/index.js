import SEO from '../../components/SEO';
import Header from '../../components/Header';
import PostList from '../../components/blog/PostList';
import Footer from '../../components/Footer';
import { posts } from '../../data/posts';

export default function BlogLanding() {
    return (
        <div className="page-container">
            <SEO
                title="Sesame Blog – Human Rights Insights in Australia and Around the World"
                description="Explore in-depth insights on human rights developments, principles, and practice in Australia and globally."
            />

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
