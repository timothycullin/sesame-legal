import styles from './BlogPageHeader.module.css';

export default function BlogPageHeader() {
    return (
        <header className={styles['blog-page-header']}>
            <h1 className={styles['blog-page-title']}>Blog</h1>
            <p className={styles['blog-page-label']}>Legal Blog</p>
        </header>
    );
}