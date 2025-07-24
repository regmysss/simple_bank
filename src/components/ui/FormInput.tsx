import React from 'react'

interface FormInputProps {
    label: string;
    name: string;
    type: string;
    required?: boolean;
    pattern?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput(props: FormInputProps) {
    const { label, ...rest } = props;

    return (
        <div className="flex flex-col gap-2 w-full mb-4">
            <label htmlFor="email" className="text-gray-500">
                {label}
            </label>
            <input
                {...rest}
                className="w-full outline-none border border-gray-500 rounded-lg p-2"
            />
        </div>
    )
}
