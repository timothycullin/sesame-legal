import Link from 'next/link';
import AppImage from '../AppImage';
import styles from './PostList.module.css';

function stripHtml(html = '') {
    return html.replace(/<[^>]+>/g, '').trim();
}

function truncateWords(text = '', maxWords = 24) {
    const words = text.split(/\s+/).filter(Boolean);
    if (words.length <= maxWords) return text;
    return `${words.slice(0, maxWords).join(' ')}…`;
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-AU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export default function PostList({ posts }) {
    const sortedPosts = [...posts].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    return (
        <section
            className={styles['posts-wrapper']}
            aria-label="Blog posts"
        >
            <div className={styles['posts-list']}>
                {sortedPosts.map(({ title, slug, imageUrl, date, author, excerpt }, index) => (
                    <Link
                        href={`/blog/${slug}`}
                        key={slug}
                        className={styles['post-link']}
                        aria-label={`Read blog post: ${title}`}
                    >
                        <article className={styles.post}>
                            <div className={styles['post-content']}>
                                {index === 0 && (
                                    <p className={styles['feature-label']}>Latest post</p>
                                )}

                                <h2 className={styles['post-title']}>{title}</h2>

                                <div className={styles['post-meta']}>
                                    <span>{formatDate(date)}</span>
                                    {author && (
                                        <>
                                            <span className={styles['meta-separator']}>•</span>
                                            <span>By {author}</span>
                                        </>
                                    )}
                                </div>

                                {excerpt && (
                                    <p className={styles['post-excerpt']}>
                                        {truncateWords(stripHtml(excerpt), 28)}
                                    </p>
                                )}

                                <span className={styles['post-link-text']}>
                                    Read article →
                                </span>
                            </div>

                            {imageUrl && (
                                <div className={styles['post-thumbnail']}>
                                    <AppImage
                                        src={imageUrl}
                                        alt={`Thumbnail for ${title}`}
                                    />
                                </div>
                            )}
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}