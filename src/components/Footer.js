import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Sesame Legal
                </p>

                <nav className={styles.links} aria-label="Footer">
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

                <p className={styles.acknowledgment}>
                    Sesame Legal acknowledges the Aboriginal and Torres Strait Islander peoples as the First Peoples and Traditional Custodians of the lands where we live, learn, work and play.
                </p>
            </div>
        </footer>
    );
}