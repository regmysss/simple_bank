'use client'

import GradientButton from '@/components/ui/GradientButton'
import TransactionFormInput from '@/components/ui/TransactionFormInput'
import { SEND_MONEY_CONFIG } from '@/shared/configs/TransactionFormConfigs'
import { useState } from 'react'

export default function SendMoney() {
    const [formData, setFormData] = useState({
        "send-amount": '',
        "recipient-account": '',
        remark: ''
    });

    return (
        <form className="w-full">
            {
                SEND_MONEY_CONFIG.map((input) => (
                    <TransactionFormInput
                        key={input.name}
                        onChange={(e) => setFormData({ ...formData, [input.name]: e.target.value })}
                        onClick={(e) => {
                            e.preventDefault();
                            setFormData({ ...formData, [input.name]: '' })
                        }
                        }
                        value={formData[input.name as keyof typeof formData]}
                        {...input}
                    />
                ))
            }
            <GradientButton>Continue</GradientButton>
        </form>
    )
}
