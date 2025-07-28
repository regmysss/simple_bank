import React from 'react'

interface AuthFormInputProps {
    label: string;
    name: string;
    type: string;
    required?: boolean;
    pattern?: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthFormInput(props: AuthFormInputProps) {
    const { label, ...rest } = props;

    return (
        <div className="flex flex-col gap-2 w-full mb-4">
            <label htmlFor="email" className="text-gray-500">
                {label}
            </label>
            <input
                {...rest}
                className="w-full outline-none border-1 border-gray-500 rounded-lg p-2"
            />
        </div>
    )
}
