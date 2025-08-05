'use client'
import GradientButton from '@/components/ui/GradientButton';
import TransactionFormInput from '@/components/ui/TransactionFormInput';
import { DEPOSIT_MONEY_ATM_CARD_CONFIG } from '@/shared/configs/TransactionFormConfigs';
import { useState } from 'react'

export default function AtmCard() {
    const [formData, setFormData] = useState({
        "card-number": '',
        "card-expiry": '',
        "card-cvv": '',
        "card-pin": ''
    });

    return (
        <form
            className='w-full'
            action="">
            <h3 className="text-xl font-medium mb-6 text-center">ATM Card</h3>
            <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72] mb-6 text-center">$232 213</p>
            {
                DEPOSIT_MONEY_ATM_CARD_CONFIG.map((field) => (
                    <TransactionFormInput
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        onClick={(e) => {
                            e.preventDefault();
                            setFormData({ ...formData, [field.name]: '' });
                        }}
                        value={formData[field.name as keyof typeof formData]}
                    />
                ))
            }
            <GradientButton
                type='submit'
            >
                Deposit
            </GradientButton>
        </form>
    );
}
