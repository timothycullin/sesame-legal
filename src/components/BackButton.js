// Imports
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './BackButton.module.css';

// Logic
export default function BackButton({ href, children = 'Back' }) {
    const router = useRouter();

    const content = (
        <>
            <span className={styles.icon} aria-hidden="true">
                ←
            </span>

            <span className={styles.label}>
                {children}
            </span>
        </>
    );

    // Markup
    if (href) {
        return (
            <Link href={href} className={styles.link}>
                {content}
            </Link>
        );
    }

    return (
        <button
            type="button"
            onClick={() => router.back()}
            className={styles.link}
        >
            {content}
        </button>
    );
}