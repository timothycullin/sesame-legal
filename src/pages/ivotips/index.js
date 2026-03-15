// pages/ivotips/index.js

// External imports
import Head from 'next/head';

// Local components
import Footer from '../../components/Footer';
import ResourcesHeader from '../../components/ResourcesHeader';
import TipSections from '../../components/ivotips/TipSections';

// Logic
export default function IvoTipLanding() {
    const pageUrl = 'https://www.sesamelegal.com/ivotips';

    // Markup
    return (
        <div className="page-container">
            <Head>
                <title>IVO Tips - Guidance for Intervention Orders in Victoria | Sesame Legal</title>
                <meta
                    name="description"
                    content="Providing the community with practical tips and guidance for navigating Intervention Orders (IVO) in Victoria."
                />
                <link rel="canonical" href={pageUrl} />

                <meta property="og:title" content="IVO Tips - Guidance for Intervention Orders in Victoria | Sesame Legal" />
                <meta property="og:description" content="Providing the community with practical tips and guidance for navigating Intervention Orders (IVO) in Victoria." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content="https://www.sesamelegal.com/social-preview-1200x630.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="IVO Tips - Guidance for Intervention Orders in Victoria | Sesame Legal" />
                <meta name="twitter:description" content="Providing the community with practical tips and guidance for navigating Intervention Orders (IVO) in Victoria." />
                <meta name="twitter:image" content="https://www.sesamelegal.com/social-preview-1200x630.png" />
            </Head>

            <main aria-labelledby="ivo-tips-heading">
                <ResourcesHeader
                    headingId="ivo-tips-heading"
                    eyebrow="Resources"
                    title="IVO Tips"
                    description="Practical guidance for people navigating Intervention Orders in Victoria, including the application process, court support, community support, and what to expect along the way."
                />

                <TipSections />
            </main>

            <Footer />
        </div>
    );
}