import Link from 'next/link';
import styles from './TipPageContent.module.css';

export default function TipPageContent({
    title,
    content,
    tips = [],
    headingId = 'tip-page-heading'
}) {
    return (
        <div className={styles['tip-page-content']}>
            {tips.length > 0 && (
                <nav className={styles['tip-nav']} aria-label="Other IVO tips">
                    <h2 className={styles['tip-nav-title']}>Other tips</h2>

                    <ul className={styles['tip-nav-list']}>
                        {tips.map((tip) => (
                            <li key={tip.slug}>
                                <Link
                                    href={`/ivotips/${tip.slug}`}
                                    className={styles['tip-nav-link']}
                                >
                                    {tip.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            <article className={styles['tip-article']}>
                <h1 id={headingId} className={styles['tip-title']}>
                    {title}
                </h1>

                <div
                    className={styles['tip-full-content']}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </article>
        </div>
    );
}