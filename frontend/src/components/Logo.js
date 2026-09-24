export const Logo = ({ className = "h-8" }) => (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
        <svg
            viewBox="0 0 32 32"
            className="h-7 w-7 shrink-0"
            aria-hidden="true"
        >
            <rect
                width="32"
                height="32"
                rx="7"
                fill="#000"
                stroke="rgba(255,255,255,0.14)"
            />
            <path
                d="M16 3 L19.2 12.8 L29 16 L19.2 19.2 L16 29 L12.8 19.2 L3 16 L12.8 12.8 Z"
                fill="#8052ff"
            />
            <circle cx="24.5" cy="7.5" r="2.2" fill="#ffb829" />
        </svg>
        <span className="font-display text-lg font-medium tracking-tight text-bone">
            Karyaloka
        </span>
    </span>
);

export default Logo;
