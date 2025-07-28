import { CircleX } from 'lucide-react'
import React from 'react'

interface TransactionFormInputProps {
    label: string;
    currencySymbol?: boolean;
    name: string;
    type: string;
    placeholder: string;
    required: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    value: string;
    pattern?: string;
}

export default function TransactionFormInput(props: TransactionFormInputProps) {
    const { label, currencySymbol, onClick, ...rest } = props;

    return (
        <div className="w-full mb-6">
            <label
                htmlFor="deposit-amount"
                className="block mb-2"
            >
                {label}
            </label>
            <div className="flex justify-between items-center gap-3 bg-white p-4 border-b-1 border-gray-200">
                {
                    currencySymbol && <span>$</span>
                }
                <input
                    className="w-full outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    {...rest}
                />
                <button
                    className="text-gray-500 cursor-pointer"
                    onClick={onClick}
                >
                    <CircleX className="size-5" />
                </button>
            </div>
        </div>
    )
}
