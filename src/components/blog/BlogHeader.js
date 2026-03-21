import Link from 'next/link';
import AppImage from '../AppImage';
import styles from './BlogHeader.module.css';

export default function BlogHeader({ title, author, date, imageUrl }) {
    const authorSlug = author.toLowerCase().replace(/\s+/g, '-');

    return (
        <header className={styles['blog-post-header']}>
            {imageUrl && (
                <div className={styles['post-thumbnail-single']}>
                    <AppImage src={imageUrl} alt={`Thumbnail for ${title}`} />
                </div>
            )}

            <div className={styles['post-info']}>
                <p className={styles['post-meta-label']}>Blog</p>

                <h1 className={styles['post-title']}>{title}</h1>

                <div className={styles['post-meta']}>
                    <p className={styles['post-date']}>{date}</p>

                    <p className={styles['post-author']}>
                        By{' '}
                        <Link
                            href={{
                                pathname: `/author/${authorSlug}`,
                                query: {
                                    from:
                                        typeof window !== 'undefined'
                                            ? window.location.pathname
                                            : '',
                                },
                            }}
                        >
                            {author}
                        </Link>
                    </p>
                </div>
            </div>
        </header>
    );
}