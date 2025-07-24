'use client';
import FormInput from '@/components/ui/FormInput'
import { PAGES } from '@/shared/constants/routes';
import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPasswordForm() {
    const [formData, setFormData] = useState<string>("");

    return (
        <form
            className="bg-white/50 p-3 rounded-4xl max-w-[500px] w-full"
            action=""
        >
            <div className="bg-white w-full py-4 px-8 rounded-[20px] flex flex-col items-center">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72] mb-2">Password Reset</h1>
                <p className="text-gray-500 text-sm mb-4 text-center">
                    Enter your email address below and we will send you a link to reset your password.
                </p>
                <FormInput
                    label='Email'
                    name="email"
                    type="email"
                    required
                    onChange={(e) => setFormData(e.target.value)}
                    value={formData}
                    pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
                    placeholder="example@gmail.com"
                />
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2754C8] to-[#110F72] text-white font-semibold py-2 rounded-lg cursor-pointer mb-4"
                >
                    Reset Password
                </button>
                <p className="text-gray-500 text-sm">
                    Remember your password? <Link href={PAGES.LOGIN} className="text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72]">Login</Link>
                </p>
            </div>
        </form>
    )
}
