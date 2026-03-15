import styles from './ResourcesHeader.module.css';

export default function ResourcesHeader({
    eyebrow = 'Resources',
    title,
    description,
}) {
    return (
        <section className={styles.header}>
            <div className={styles.inner}>
                {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
                <h1 className={styles.title}>{title}</h1>
                {description && <p className={styles.description}>{description}</p>}
            </div>
        </section>
    );
}
