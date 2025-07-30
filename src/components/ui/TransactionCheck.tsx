import React from 'react'
import GradientButton from './GradientButton'
import TransactionCheckItem from './TransactionCheckItem'

interface TransactionCheckProps {
    title: string;
    description: string;
    amount: string;
}

export default function TransactionCheck({ title, description, amount }: TransactionCheckProps) {
    const formatedAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(amount));

    return (
        <div className="text-center">
            <h3 className="text-xl font-medium mb-6">{title}</h3>
            <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72] mb-6">{formatedAmount}</p>
            <p className="font-medium mb-6">
                {description}
            </p>

            <TransactionCheckItem
                title="Bank"
                description="Simple Bank"
            />
            <TransactionCheckItem
                title="Account No."
                description="8160515151"
            />
            <TransactionCheckItem
                title="Account Name"
                description="John Doe"
            />

            <GradientButton className="mt-6">Done</GradientButton>
        </div>
    )
}
