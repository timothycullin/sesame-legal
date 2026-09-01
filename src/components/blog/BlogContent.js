// Imports
import styles from './BlogContent.module.css';

// Markup
export default function BlogContent({ excerpt, content }) {
    return (
        <div className={styles['post-content']}>
            {excerpt && (
                <div
                    className={styles['post-excerpt-highlight']}
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                />
            )}

            <div
                className={styles['post-body']}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}