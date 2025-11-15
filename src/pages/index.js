import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from './home.module.css';
import BlogIcon from '../components/BlogIcon';
import IVOTipsIcon from '../components/IvoTipsIcon';

export default function Home() {
    return (
        <div className="page-container">
            <SEO
                title="Sesame Legal – IVO Tips & Sesame Blog"
                description="Sesame Legal is your trusted hub for practical guidance on Intervention Orders and human rights insights through Sesame Blog."
            />

            <main>
                <Header
                    title="Sesame Legal"
                    label="Legal Resources"
                    description="Your portal to IVO Tips and Sesame Blog — providing practical guidance and insights on human rights in Australia."
                />

                <section className={styles['portal-cards']} aria-label="Legal Resources Portals">
                    {/* IVO Tips Portal */}
                    <Link href="/ivotips" className={styles.card} role="link">
                        <div className={styles['card-content']}>
                            <div className={styles['card-icon']}>
                                <IVOTipsIcon width={64} height={64} aria-hidden="true" />
                            </div>
                            <h2>IVO Tips</h2>
                            <p>Step-by-step guidance and resources for navigating Intervention Orders in Victoria.</p>
                        </div>
                    </Link>

                    {/* Blog Portal */}
                    <Link href="/blog" className={styles.card} role="link">
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
