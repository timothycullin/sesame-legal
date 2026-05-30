// Imports
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './BackButton.module.css';

// Logic
export default function BackButton({ href, children = 'Back' }) {
    const router = useRouter();

    const label =
        typeof children === 'string'
            ? children.replace(/^←\s*/, '')
            : children;

    // Markup
    if (href) {
        return (
            <div className={styles.back}>
                <Link href={href} className={styles.link}>
                    {label}
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.back}>
            <button
                type="button"
                onClick={() => router.back()}
                className={styles.link}
            >
                {label}
            </button>
        </div>
    );
}