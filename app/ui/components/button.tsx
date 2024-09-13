import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    size?: 'small' | 'large';
}

export default function Button({ children, onClick, href, size = 'small' }: ButtonProps) {
    const sizeClasses = size === 'small' ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base';
    const baseClasses = `inline-flex items-center justify-center border border-accent border-solid font-medium rounded-md text-textDark dark:text-text hover:bg-accent  ${sizeClasses}`;

    if (href) {
        return (
            <Link href={href} passHref>
                <a className={baseClasses}>
                    {children}
                </a>
            </Link>
        );
    }

    return (
        <>
            <button
                onClick={onClick}
                className={baseClasses}
            >
                {children}
            </button>
        </>
    );
}