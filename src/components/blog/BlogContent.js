import styles from './BlogContent.module.css';

export default function BlogContent({ excerpt, content }) {
    return (
        <article className={styles['post-content']}>
            {excerpt && (
                <div
                    className={styles['post-excerpt-highlight']}
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                />
            )}
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
    );
}
