// components/author/AuthorBio.js
import styles from './AuthorBio.module.css';

export default function AuthorBio({ bio }) {
    if (!bio) return null;

    return (
        <div className={styles['author-bio-text']}>
            {bio.split('\n').map((line, idx) =>
                line.toLowerCase().startsWith('contact:') ? (
                    <p key={idx} className={styles['author-contact']}>
                        Contact at{' '}
                        <a href={`mailto:${line.split(':')[1].trim()}`}>
                            {line.split(':')[1].trim()}
                        </a>
                    </p>
                ) : (
                    <p key={idx}>{line}</p>
                )
            )}
        </div>
    );
}
