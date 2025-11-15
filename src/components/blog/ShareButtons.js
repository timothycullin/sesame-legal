import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import styles from './ShareButtons.module.css';

export default function ShareButtons({ postUrl, postTitle }) {
    const getShareUrl = (platform) => {
        switch (platform) {
            case 'twitter':
                return `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`;
            case 'facebook':
                return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
            case 'linkedin':
                return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
            default:
                return '#';
        }
    };

    return (
        <div className={styles['share-buttons']}>
            <a
                href={getShareUrl('twitter')}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={styles['share-button']}
                aria-label={`Share "${postTitle}" on Twitter`}
            >
                <FaTwitter className={styles['share-icon']} />
            </a>
            <a
                href={getShareUrl('facebook')}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={styles['share-button']}
                aria-label={`Share "${postTitle}" on Facebook`}
            >
                <FaFacebookF className={styles['share-icon']} />
            </a>
            <a
                href={getShareUrl('linkedin')}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={styles['share-button']}
                aria-label={`Share "${postTitle}" on LinkedIn`}
            >
                <FaLinkedinIn className={styles['share-icon']} />
            </a>
        </div>
    );
}
