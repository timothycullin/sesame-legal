// pages/ivotips/[slug].js
import SEO from '../../components/SEO';
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';
import TipPageWrapper from '../../components/ivotips/TipPageWrapper';
import TipArticle from '../../components/ivotips/TipArticle';
import TipNav from '../../components/ivotips/TipNav';
import tips from '../../data/tips';

export async function getStaticPaths() {
    const paths = tips.map((tip) => ({ params: { slug: tip.slug } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const tip = tips.find((t) => t.slug === params.slug);
    if (!tip) return { notFound: true };
    return { props: { tip } };
}

export default function TipPage({ tip }) {
    const otherTips = tips.filter((t) => t.slug !== tip.slug);

    return (
        <div className="page-container">
            <SEO title={`${tip.title} - IVO Tips`} description={tip.description} />
            <main>
                <TipPageWrapper>
                    <BackButton href="/ivotips">← Back to IVO Tips</BackButton>
                    <TipNav tips={otherTips} />
                    <TipArticle title={tip.title} content={tip.content} />
                </TipPageWrapper>
            </main>
            <Footer />
        </div>
    );
}
