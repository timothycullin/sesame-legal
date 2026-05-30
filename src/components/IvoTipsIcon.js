// Markup
export default function BlogIcon({
    width = '7.5rem',
    height = '7.5rem',
    title,
    ...props
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 31.75 31.75"
            role={title ? 'img' : 'presentation'}
            aria-hidden={title ? undefined : 'true'}
            aria-label={title}
            {...props}
        >
            <g
                fill="#1e3a8a"
                transform="matrix(.0977 0 0 .0977 15.875 15.875)"
            >
                <circle cy={-100} r={30} />
                <circle cx={100} r={30} />
                <circle cy={100} r={30} />
                <circle cx={-100} r={30} />
            </g>

            <g
                fill="#3b82f6"
                transform="matrix(.0977 0 0 .0977 15.875 15.875)"
            >
                <circle cx={50} cy={-50} r={15} />
                <circle cx={50} cy={50} r={15} />
                <circle cx={-50} cy={50} r={15} />
                <circle cx={-50} cy={-50} r={15} />
            </g>
        </svg>
    );
}