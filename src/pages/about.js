// Imports
import Head from 'next/head';
import Footer from '../components/Footer';
import styles from './about.module.css';

// Logic
const pageUrl = 'https://www.sesamelegal.com/about';

const seo = {
    title: 'About | Sesame Legal',
    description:
        'Learn about Sesame Legal, an independent legal information project providing clear, practical information on Victorian commercial and property law, wills and estates.',
    image: 'https://www.sesamelegal.com/social-preview-1200x630.png',
};

const pageContent = {
    eyebrow: 'About',
    title: 'Sesame Legal',
    lead:
        'Sesame Legal is an independent legal information project focused on making Victorian law clear, practical and easier to understand.',
    body: [
        'It publishes legal information and commentary on commercial and property law, commercial transactions, wills and estates.',
        'The aim is to present legal concepts in a way that is direct, readable and useful, while respecting the seriousness and precision of the law.',
    ],
    note:
        'Sesame Legal provides general legal information only. It is not a law firm and does not provide legal advice tailored to your individual circumstances.',
};

export default function About() {
    // Markup
    return (
        <div className={styles.page}>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <link rel="canonical" href={pageUrl} />

                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:site_name" content="Sesame Legal" />
                <meta property="og:image" content={seo.image} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seo.title} />
                <meta
                    name="twitter:description"
                    content={seo.description}
                />
                <meta name="twitter:image" content={seo.image} />
            </Head>

            <main className={styles.main}>
                <section
                    className={styles.hero}
                    aria-labelledby="about-sesame-legal"
                >
                    <p className={styles.eyebrow}>
                        {pageContent.eyebrow}
                    </p>

                    <h1
                        id="about-sesame-legal"
                        className={styles.title}
                    >
                        {pageContent.title}
                    </h1>

                    <div className={styles.content}>
                        <p className={styles.lead}>
                            {pageContent.lead}
                        </p>

                        <div className={styles.body}>
                            {pageContent.body.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>

                        <p className={styles.note}>
                            {pageContent.note}
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}