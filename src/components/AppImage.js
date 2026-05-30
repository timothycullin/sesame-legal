// Imports
import { useState } from 'react';
import Image from 'next/image';
import BlogIcon from './BlogIcon';

// Logic
export default function AppImage({
    src,
    alt,
    fill = true,
    objectFit = 'cover',
    objectPosition = 'center',
    loading = 'lazy',
    width,
    height,
    className = '',
    isAvatar = false,
    ...props
}) {
    const [hasError, setHasError] = useState(false);
    const hasImage = Boolean(src && !hasError);

    const fallbackStyle = {
        width: width || '100%',
        height: height || '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: isAvatar ? '50%' : 0,
        overflow: 'hidden',
    };

    // Markup
    if (!hasImage) {
        return (
            <div className={className} style={fallbackStyle} aria-hidden="true">
                <BlogIcon
                    width="50%"
                    height="50%"
                    style={{
                        display: 'block',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        filter: 'grayscale(100%) opacity(0.6)',
                    }}
                />
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt || ''}
            fill={fill}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            style={{ objectFit, objectPosition }}
            loading={loading}
            onError={() => setHasError(true)}
            className={className}
            {...props}
        />
    );
}