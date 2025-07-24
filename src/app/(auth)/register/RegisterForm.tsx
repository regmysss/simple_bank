'use client'
import FormInput from '@/components/ui/FormInput'
import { REGISTER_CONFIG } from '@/shared/configs/FormConfigs'
import Link from 'next/link'
import { useState } from 'react'

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    return (
        <form
            className="bg-white/50 p-3 rounded-4xl max-w-[500px] w-full"
            action=""
        >
            <div className="bg-white w-full py-4 px-8 rounded-[20px] flex flex-col items-center">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72] mb-4">Register</h1>
                {
                    REGISTER_CONFIG.map((input) => (
                        <FormInput
                            key={input.name}
                            {...input}
                            value={formData[input.name as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [input.name]: e.target.value })}
                            required={formData.password === formData.confirmPassword}
                        />
                    ))
                }
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2754C8] to-[#110F72] text-white font-semibold py-2 rounded-lg cursor-pointer mb-4"
                >
                    Register
                </button>
                <p className="text-gray-500 text-sm">
                    Do you have an account? <Link href="/register" className="text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72]">Login</Link>
                </p>
            </div>
        </form>
    )
}
