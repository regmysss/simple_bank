import React from 'react'

interface TransactionCheckItemProps {
    title: string;
    description: string;
}

export default function TransactionCheckItem({ title, description }: TransactionCheckItemProps) {
    {
        return (
            <div
                className="py-4 flex items-center justify-between border-b-1 border-gray-300"
            >
                <p className='text-gray-500 text-sm font-medium'>{title}</p>
                <p className='font-medium'>{description}</p>
            </div>
        )
    }
}