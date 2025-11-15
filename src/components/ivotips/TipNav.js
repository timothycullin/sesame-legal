import Link from 'next/link';
import styles from './TipNav.module.css';

export default function TipNav({ tips }) {
    if (!tips.length) return null;

    return (
        <nav className={styles['tip-nav']}>
            <h2 className={styles['tip-nav-title']}>Other Tips</h2>
            <ul className={styles['tip-nav-list']}>
                {tips.map((t) => (
                    <li key={t.slug}>
                        <Link href={`/ivotips/${t.slug}`} className={styles['tip-nav-link']}>
                            {t.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
