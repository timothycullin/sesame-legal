// Imports
import styles from './IvoTipsHeader.module.css';

// Markup
export default function IvoTipsHeader({
    title,
    headingId,
    description,
}) {
    return (
        <section className={styles.header} aria-labelledby={headingId}>
            <div className={styles.inner}>
                <p className={styles.eyebrow}>Guide</p>

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