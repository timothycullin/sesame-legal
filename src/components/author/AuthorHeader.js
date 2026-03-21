import AppImage from '../AppImage';
import styles from './AuthorHeader.module.css';

export default function AuthorHeader({ name, image }) {
    return (
        <header className={styles['author-header']}>
            {image && (
                <figure className={styles['author-image']}>
                    <AppImage
                        src={image}
                        alt=""
                        width={120}
                        height={120}
                        fill={false}
                    />
                </figure>
            )}

            <div className={styles['author-info']}>
                <p className={styles['author-kicker']}>Author</p>
                <h1 id="author-page-title" className={styles['author-page-title']}>
                    {name}
                </h1>
            </div>
        </header>
    );
}