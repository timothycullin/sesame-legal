// components/author/AuthorHeader.js
import AppImage from '../AppImage';
import styles from './AuthorHeader.module.css';

export default function AuthorHeader({ name, image }) {
    return (
        <section className={styles['author-header']}>
            <figure className={styles['author-image']}>
                <AppImage
                    src={image}   // may be missing or broken
                    alt=""        // empty so screen readers skip decorative image
                    width={120}
                    height={120}
                    fill={false}
                />
            </figure>

            <div className={styles['author-info']}>
                <h1 className={styles['author-page-title']}>{name}</h1>
            </div>
        </section>
    );
}
