// Totem.js

// Markup
export default function Totem({
    width = "1.25rem",
    title,
    ...props
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            viewBox="40.9023617 90.3550979 18.7940846 42.2866944"
            role={title ? "img" : "presentation"}
            aria-hidden={title ? undefined : "true"}
            aria-label={title}
            {...props}
        >
            <circle
                cx="50.299404"
                cy="123.24475"
                r="9.3970423"
                fill="#e6001a"
            />

            <circle
                cx="50.299404"
                cy="106.79991"
                r="7.0477824"
                fill="#ffc800"
            />

            <circle
                cx="50.299404"
                cy="95.053619"
                r="4.6985211"
                fill="#006fee"
            />
        </svg>
    );
}