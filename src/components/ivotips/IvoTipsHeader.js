// Imports
import styles from './IvoTipsHeader.module.css';

// Markup
export default function IvoTipsHeader({
    eyebrow = 'Resources',
    title,
    headingId,
    description,
}) {
    return (
        <section className={styles.header} aria-labelledby={headingId}>
            <div className={styles.inner}>
                {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}

                <h1 id={headingId} className={styles.title}>
                    {title}
                </h1>

                {description && (
                    <p className={styles.description}>{description}</p>
                )}
            </div>
        </section>
    );
}