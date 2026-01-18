// pages/ivotips/index.js
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TipSections from '../../components/ivotips/TipSections';

export default function IvoTipLanding() {
    const pageUrl = 'https://www.sesamelegal.com/ivotips';

    return (
        <div className="page-container">
            {/* Minimal self-contained SEO */}
            <Head>
                <title>IVO Tips - Guidance for Intervention Orders in Victoria | Sesame Legal</title>
                <meta
                    name="description"
                    content="Providing the community with practical tips and guidance for navigating Intervention Orders (IVO) in Victoria."
                />
                <link rel="canonical" href={pageUrl} />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="IVO Tips - Guidance for Intervention Orders in Victoria | Sesame Legal" />
                <meta property="og:description" content="Providing the community with practical tips and guidance for navigating Intervention Orders (IVO) in Victoria." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content="https://www.sesamelegal.com/social-preview-1200x630.png" />

                {/* Twitter / X */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="IVO Tips - Guidance for Intervention Orders in Victoria | Sesame Legal" />
                <meta name="twitter:description" content="Providing the community with practical tips and guidance for navigating Intervention Orders (IVO) in Victoria." />
                <meta name="twitter:image" content="https://www.sesamelegal.com/social-preview-1200x630.png" />
            </Head>

            <main>
                <Header
                    title="IVO Tips"
                    label="Legal Tips"
                    description="Providing the community with guidance on navigating Intervention Orders in Victoria."
                />

                <TipSections />
            </main>

            <Footer />
        </div>
    );
}
