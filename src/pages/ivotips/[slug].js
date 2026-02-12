// pages/ivotips/[slug].js

// External imports
import Head from 'next/head';

// Local components
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';
import TipPageWrapper from '../../components/ivotips/TipPageWrapper';
import TipArticle from '../../components/ivotips/TipArticle';
import TipNav from '../../components/ivotips/TipNav';

// Local data
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
    const tipUrl = `https://www.sesamelegal.com/ivotips/${tip.slug}`;

    return (
        <div className="page-container">
            {/* Minimal self-contained SEO */}
            <Head>
                <title>{tip.title} - IVO Tips | Sesame Legal</title>
                <meta
                    name="description"
                    content={tip.description || `Practical guidance on Intervention Orders in Victoria: ${tip.title}`}
                />
                <link rel="canonical" href={tipUrl} />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content={`${tip.title} - IVO Tips | Sesame Legal`} />
                <meta property="og:description" content={tip.description || `Practical guidance on Intervention Orders in Victoria: ${tip.title}`} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={tipUrl} />

                {/* Fallback OG image for tips */}
                <meta property="og:image" content="https://www.sesamelegal.com/social-preview-1200x630.png" />

                {/* Twitter / X */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${tip.title} - IVO Tips | Sesame Legal`} />
                <meta name="twitter:description" content={tip.description || `Practical guidance on Intervention Orders in Victoria: ${tip.title}`} />
                <meta name="twitter:image" content="https://www.sesamelegal.com/social-preview-1200x630.png" />
            </Head>

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
