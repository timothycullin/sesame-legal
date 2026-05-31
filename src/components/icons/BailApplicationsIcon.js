// Markup
export default function BailApplicationsIcon({
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
            <g transform="matrix(.0977 0 0 .0977 15.875 15.875)">
                <circle cx="-90" cy="-90" r="28" fill="#5b21b6" />
                <circle cx="0" cy="-105" r="24" fill="#e6007a" />
                <circle cx="80" cy="-70" r="22" fill="#1e293b" />
                <circle cx="105" cy="10" r="20" fill="#e6007a" />
                <circle cx="55" cy="75" r="18" fill="#5b21b6" />
                <circle cx="-20" cy="85" r="16" fill="#1e293b" />
                <circle cx="-65" cy="35" r="14" fill="#e6007a" />
                <circle cx="-25" cy="-20" r="12" fill="#5b21b6" />
                <circle cx="25" cy="-5" r="10" fill="#1e293b" />
            </g>
        </svg>
    );
}