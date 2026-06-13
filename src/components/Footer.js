// Imports
import Link from 'next/link';
import styles from './Footer.module.css';

// Markup
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Sesame Legal
                </p>

                <p className={styles.credit}>
                    A Tim Cullin production
                </p>

                <nav className={styles.links} aria-label="Footer navigation">
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

                <p className={styles.acknowledgment}>
                    Established in Victoria, Australia, Sesame Legal is informed by an appreciation for Victoria’s civic traditions, Australia’s democratic institutions, and the administration of justice.
                </p>
            </div>
        </footer>
    );
}