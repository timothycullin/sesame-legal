import styles from './TipArticle.module.css';

export default function TipArticle({ title, content }) {
    return (
        <article className={styles['tip-article']}>
            <h1 className={styles['tip-title']}>{title}</h1>
            <div
                className={styles['tip-full-content']}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </article>
    );
}
