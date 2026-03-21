import styles from './BlogPageHeader.module.css';

export default function BlogPageHeader() {
    return (
        <header className={styles['blog-page-header']}>
            <p className={styles['blog-page-kicker']}>Commentary</p>
            <h1 id="blog-page-title" className={styles['blog-page-title']}>
                Blog
            </h1>
            <p className={styles['blog-page-intro']}>
                Legal commentary, analysis, and public-interest writing.
            </p>
        </header>
    );
}