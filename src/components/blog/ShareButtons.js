// Imports
import {
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaLink,
} from 'react-icons/fa';
import styles from './ShareButtons.module.css';

// Logic
export default function ShareButtons({ postUrl, postTitle }) {
    const getShareUrl = (platform) => {
        switch (platform) {
            case 'twitter':
                return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    postUrl
                )}&text=${encodeURIComponent(postTitle)}`;
            case 'facebook':
                return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    postUrl
                )}`;
            case 'linkedin':
                return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    postUrl
                )}`;
            default:
                return '#';
        }
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(postUrl);
        } catch (error) {
            console.error('Failed to copy link:', error);
        }
    };

    // Markup
    return (
        <div className={styles['share-buttons']}>
            <a
                href={getShareUrl('twitter')}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={styles['share-button']}
                aria-label={`Share "${postTitle}" on Twitter`}
            >
                <FaTwitter className={styles['share-icon']} aria-hidden="true" />
            </a>

            <a
                href={getShareUrl('facebook')}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={styles['share-button']}
                aria-label={`Share "${postTitle}" on Facebook`}
            >
                <FaFacebookF className={styles['share-icon']} aria-hidden="true" />
            </a>

            <a
                href={getShareUrl('linkedin')}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={styles['share-button']}
                aria-label={`Share "${postTitle}" on LinkedIn`}
            >
                <FaLinkedinIn className={styles['share-icon']} aria-hidden="true" />
            </a>

            <button
                type="button"
                className={styles['share-button']}
                onClick={handleCopyLink}
                aria-label={`Copy link to "${postTitle}"`}
            >
                <FaLink className={styles['share-icon']} aria-hidden="true" />
            </button>
        </div>
    );
}