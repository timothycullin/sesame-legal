// Footer.js

// Imports
import Link from 'next/link';

import Totem from './Totem';

import styles from './Footer.module.css';

// Logic
export default function Footer() {
    const year = new Date().getFullYear();

    // Markup
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.identity}>
                        <div className={styles.brand}>
                            <Totem className={styles.totem} />

                            <span className={styles['brand-name']}>
                                Sesame Legal
                            </span>
                        </div>

                        <p className={styles.meta}>
                            © {year} Sesame Legal
                            <span
                                className={styles.separator}
                                aria-hidden="true"
                            >
                                ·
                            </span>
                            A Tim Cullin production
                        </p>
                    </div>

                    <nav
                        className={styles.links}
                        aria-label="Footer navigation"
                    >
                        <Link href="/about">
                            About
                        </Link>

                        <Link href="/contact">
                            Contact
                        </Link>
                    </nav>
                </div>

                <div
                    className={styles.divider}
                    aria-hidden="true"
                />

                <p className={styles.acknowledgment}>
                    Established in Victoria, Australia, Sesame Legal is
                    informed by an appreciation for Victoria’s civic
                    traditions, Australia’s democratic institutions,
                    and the administration of justice.
                </p>
            </div>
        </footer>
    );
}