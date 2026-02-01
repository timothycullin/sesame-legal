// External / framework imports
import Head from 'next/head';
import Link from 'next/link';

// Internal components
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogIcon from '../components/BlogIcon';
import IVOTipsIcon from '../components/IvoTipsIcon';

// Local styles
import styles from './home.module.css';

export default function Home() {
    return (

        <div className="page-container">

            {/* Minimal self-contained SEO */}
            <Head>
                <title>Sesame Legal – IVO Tips & Blog</title>
                <meta
                    name="description"
                    content="Sesame Legal is your trusted hub for practical guidance on Intervention Orders and human rights insights through Sesame Blog."
                />
                <link rel="canonical" href="https://www.sesamelegal.com/" />
            </Head>

            <main>
                <Header
                    title="Sesame Legal"
                    label="Legal Resources"
                    description="Your portal to IVO Tips and Sesame Blog — providing practical guidance and insights on human rights in Australia."
                />

                <section className={styles['portal-cards']} aria-label="Legal Resources Portals">
                    {/* IVO Tips Portal */}
                    <Link href="/ivotips" className={styles.card}>
                        <div className={styles['card-content']}>
                            <div className={styles['card-icon']}>
                                <IVOTipsIcon width={64} height={64} aria-hidden="true" />
                            </div>
                            <h2>IVO Tips</h2>
                            <p>Step-by-step guidance and resources for navigating Intervention Orders in Victoria.</p>
                        </div>
                    </Link>

                    {/* Blog Portal */}
                    <Link href="/blog" className={styles.card}>
                        <div className={styles['card-content']}>
                            <div className={styles['card-icon']}>
                                <BlogIcon width={64} height={64} aria-hidden="true" />
                            </div>
                            <h2>Sesame Blog</h2>
                            <p>Insights and analysis on human rights issues in Australia and around the world.</p>
                        </div>
                    </Link>
                </section>

            </main>

            <Footer />
        </div>
    );
}
