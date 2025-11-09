// src/components/OutlinedButton.tsx
import { type ReactNode } from 'react';

interface ButtonProps {
    title: string;         // Button text
    onClick?: () => void;        // Click handler
    icon?: ReactNode;            // Optional icon
    className?: string;          // Extra Tailwind classes
}

export default function Button({
    title,
    onClick,
    icon,
    className = '',
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-0 border-2 border-[#078361] text-[#078361] rounded hover:bg-green-50 transition-colors ${className}`}
        >
            {icon && <span className="flex items-center">{icon}</span>}
            <span>{title}</span>
        </button>
    );
}
