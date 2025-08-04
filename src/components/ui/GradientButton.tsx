import { twMerge } from "tailwind-merge";

interface GradientButtonProps {
    children: React.ReactNode;
    type?: 'submit' | 'button' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}


export default function GradientButton(props: GradientButtonProps) {
    const { children, className, ...rest } = props;

    return (
        <button
            className={twMerge("w-full bg-gradient-to-r from-[#2754C8] to-[#110F72] text-white py-3 rounded-lg cursor-pointer mb-4 disabled:opacity-50", className)}
            {...rest}
        >
            {children}
        </button>
    )
}
