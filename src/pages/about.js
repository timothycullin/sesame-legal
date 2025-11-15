// pages/about.js
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import styles from './about.module.css';

export default function About() {
    return (
        <div className="page-container">
            {/* SEO meta tags */}
            <SEO
                title="About Sesame Legal, IVO Tips & Sesame Blog"
                description="Sesame Legal is your trusted legal resource hub in Australia, providing guidance on Intervention Orders via IVO Tips, and insights on human rights through Sesame Blog."
            />

            <main className={styles.main}>
                {/* Umbrella Section */}
                <h1>About Sesame Legal</h1>
                <div className={styles['paragraphs-highlight']}>
                    <p>
                        Sesame Legal is your trusted legal resource hub in Australia. We provide practical guidance, clear explanations, and insightful analysis for those navigating legal processes or seeking to understand human rights law.
                    </p>
                    <p>
                        Our platform includes <strong>IVO Tips</strong>, helping individuals navigate Intervention Orders in Victoria, and the <strong>Sesame Blog</strong>, offering commentary, updates, and analysis on human rights topics.
                    </p>
                </div>

                {/* IVO Tips Section */}
                <h2>About IVO Tips</h2>
                <div className={styles['paragraphs-highlight']}>
                    <p>
                        IVO Tips is our dedicated resource for Intervention Orders in Victoria. We provide clear, step-by-step guidance to help individuals understand the process, know their rights, and feel supported while navigating court matters and community support services.
                    </p>
                    <p>
                        Our aim is to make legal information accessible, empowering people to approach Intervention Orders with confidence and clarity.
                    </p>
                </div>

                {/* Sesame Blog Section */}
                <h2>About Sesame Blog</h2>
                <div className={styles['paragraphs-highlight']}>
                    <p>
                        Sesame Blog is dedicated to providing insights, updates, and analysis on human rights matters.
                    </p>
                    <p>
                        Our goal is to help practitioners, students, and interested readers stay informed and engaged with developments in human rights.
                    </p>
                    <p>
                        We strive to present content that is clear, accurate, and accessible, offering value to anyone seeking to understand complex human rights issues.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
