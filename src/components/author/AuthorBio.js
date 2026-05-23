import styles from './AuthorBio.module.css';

export default function AuthorBio({ bio }) {
    if (!bio) return null;

    return (
        <div className={styles['author-bio-text']}>
            {bio.split('\n').map((line, idx) => {
                const trimmedLine = line.trim();

                if (!trimmedLine) return null;

                if (trimmedLine.toLowerCase().startsWith('contact:')) {
                    const email = trimmedLine.split(':')[1]?.trim();

                    if (!email) return null;

                    return (
                        <p key={idx} className={styles['author-contact']}>
                            Contact at <a href={`mailto:${email}`}>{email}</a>
                        </p>
                    );
                }

                return <p key={idx}>{trimmedLine}</p>;
            })}
        </div>
    );
}