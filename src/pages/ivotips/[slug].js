// pages/ivotips/[slug].js

// External imports
import Head from 'next/head';

// Local components
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';
import TipPageContent from '../../components/ivotips/TipPageContent';

// Local data
import tips from '../../data/tips';

export async function getStaticPaths() {
    const paths = tips.map((tip) => ({ params: { slug: tip.slug } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const tip = tips.find((t) => t.slug === params.slug);

    if (!tip) {
        return { notFound: true };
    }

    return { props: { tip } };
}

export default function TipPage({ tip }) {
    const otherTips = tips.filter((t) => t.slug !== tip.slug);
    const tipUrl = `https://www.sesamelegal.com/ivotips/${tip.slug}`;
    const description =
        tip.description || `Practical guidance on Intervention Orders in Victoria: ${tip.title}`;

    return (
        <div className="page-container">
            <Head>
                <title>{tip.title} - IVO Tips | Sesame Legal</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={tipUrl} />

                <meta property="og:title" content={`${tip.title} - IVO Tips | Sesame Legal`} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={tipUrl} />
                <meta property="og:image" content="https://www.sesamelegal.com/social-preview-1200x630.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${tip.title} - IVO Tips | Sesame Legal`} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://www.sesamelegal.com/social-preview-1200x630.png" />
            </Head>

            <main aria-labelledby="tip-title">
                <BackButton href="/ivotips">← Back to IVO Tips</BackButton>
                <TipPageContent
                    title={tip.title}
                    content={tip.content}
                    tips={otherTips}
                    headingId="tip-title"
                />
            </main>

            <Footer />
        </div>
    );
}