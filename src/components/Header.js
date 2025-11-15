import styles from './Header.module.css';

export default function Header({ title, label, description }) {
    return (
        <header className={styles['page-header']} aria-label="Page Header">
            <h1 className={styles['page-title']}>
                {title}
                <span className={styles['visually-hidden']}>{description}</span>
            </h1>

            {label && <p className={styles['page-label']}>{label}</p>}
            {description && <p className={styles['page-description']}>{description}</p>}
        </header>
    );
}
