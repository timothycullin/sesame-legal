// Markup
export default function TotemIcon({
    width = '1.25rem',
    height = '2rem',
    title,
    ...props
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 12 27"
            role={title ? 'img' : 'presentation'}
            aria-hidden={title ? undefined : 'true'}
            aria-label={title}
            {...props}
        >
            <circle cx="6" cy="21" r="5.5" fill="#e6001a" />
            <circle cx="6" cy="11.25" r="4.1" fill="#ffc800" />
            <circle cx="6" cy="4.25" r="2.75" fill="#006fee" />
        </svg>
    );
}