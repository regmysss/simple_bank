import React from 'react'

interface GradientButtonProps {
    children: React.ReactNode;
    type?: 'submit' | 'button' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
}


export default function GradientButton(props: GradientButtonProps) {
    const { children, ...rest } = props;

    return (
        <button
            className="w-full bg-gradient-to-r from-[#2754C8] to-[#110F72] text-white py-3 rounded-lg cursor-pointer mb-4"
            {...rest}
        >
            {children}
        </button>
    )
}
