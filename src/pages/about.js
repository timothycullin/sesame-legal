// Imports
import Head from 'next/head';
import Footer from '../components/Footer';
import styles from './about.module.css';

// Logic
export default function About() {
    return (
        <div className="page-container">
            <Head>
                <title>About Sesame Legal</title>
                <meta
                    name="description"
                    content="Sesame Legal provides clear, practical legal information and insights to help people understand legal processes and human rights in Australia."
                />
                <link rel="canonical" href="https://www.sesamelegal.com/about" />
            </Head>

            {/* Markup */}
            <main className={styles.main}>
                <section className={styles.hero} aria-labelledby="about-sesame-legal">
                    <p className={styles.eyebrow}>About</p>
                    <h1 id="about-sesame-legal" className={styles.title}>
                        Sesame Legal
                    </h1>

                    <div className={styles['content-card']}>
                        <p>
                            Sesame Legal is an independent legal resource focused on making complex legal information clear and accessible.
                        </p>
                        <p>
                            We provide practical guidance and insights to help people better understand legal processes and human rights in Australia.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}