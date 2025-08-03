'use client'
import AuthFormInput from '@/components/ui/AuthFormInput'
import GradientButton from '@/components/ui/GradientButton'
import { REGISTER_CONFIG } from '@/shared/configs/AuthFormConfigs'
import { PAGES } from '@/shared/constants/routes'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function RegisterForm() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/user', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                password: formData.password
            })
        })

        if (response.ok) {
            router.push(PAGES.LOGIN);
        }
        else {
            console.error('Failed to register user!');
        }
    }

    return (
        <form
            className="bg-white/50 p-3 rounded-4xl max-w-[500px] w-full"
            onSubmit={handleSubmit}
        >
            <div className="bg-white w-full py-4 px-8 rounded-[20px] flex flex-col items-center">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72] mb-4">Register</h1>
                {
                    REGISTER_CONFIG.map((input) => {
                        const props = input.name === 'confirmPassword' ? { ...input, pattern: formData.password } : input;

                        return <AuthFormInput
                            key={input.name}
                            {...props}
                            value={formData[input.name as keyof typeof formData] ?? ''}
                            onChange={(e) => setFormData({ ...formData, [input.name]: e.target.value })}
                        />
                    })
                }
                <GradientButton
                    type="submit"
                >
                    Register
                </GradientButton>
                <p className="text-gray-500 text-sm">
                    Do you have an account? <Link href={PAGES.LOGIN} className="text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72]">Login</Link>
                </p>
            </div>
        </form>
    )
}
