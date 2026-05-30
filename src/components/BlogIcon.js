// Markup
export default function SvgLogoComponent({
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
            <g transform="translate(-14.338 -51.098) scale(.60066)">
                <circle cx={50.299} cy={123.245} r={9.397} fill="#e6001a" />
                <circle cx={50.299} cy={106.8} r={7.048} fill="#ffc800" />
                <circle cx={50.299} cy={95.054} r={4.699} fill="#006fee" />
            </g>
        </svg>
    );
}