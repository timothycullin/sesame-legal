// components/BackButton.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './BackButton.module.css';

export default function BackButton({ href, children }) {
    const router = useRouter();

    if (href) {
        return (
            <div className={styles.back}>
                <Link href={href} className={styles.link}>
                    {children}
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.back}>
            <button onClick={() => router.back()} className={styles.link}>
                {children}
            </button>
        </div>
    );
}
