import Link from 'next/link';
import AppImage from '../AppImage';
import styles from './PostList.module.css';

export default function PostList({ posts }) {
    return (
        <section className={styles['posts-list']}>
            {posts.map(({ title, slug, imageUrl }) => (
                <Link href={`/blog/${slug}`} key={slug} className={styles['post-link']}>
                    <article className={styles.post}>
                        <div className={styles['post-content']}>
                            <h2 className={styles['post-title']}>{title}</h2>
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
        </section>
    );
}
