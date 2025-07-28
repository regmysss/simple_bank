'use client'
import AuthFormInput from "@/components/ui/AuthFormInput";
import GradientButton from "@/components/ui/GradientButton";
import { LOGIN_CONFIG } from "@/shared/configs/AuthFormConfigs";
import { PAGES } from "@/shared/constants/routes";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    return (
        <form
            className="bg-white/50 p-3 rounded-4xl max-w-[500px] w-full"
            action="/home"
        >
            <div className="bg-white w-full py-4 px-8 rounded-[20px] flex flex-col items-center">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72] mb-4">Login</h1>
                {
                    LOGIN_CONFIG.map((input) => (
                        <AuthFormInput
                            key={input.name}
                            {...input}
                            value={formData[input.name as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [input.name]: e.target.value })}
                        />
                    ))
                }
                <Link href={PAGES.FORGOT_PASSWORD} className="text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72] mb-4 text-sm w-full text-right">
                    Forgot Password?
                </Link>
                <GradientButton
                    type="submit"
                >
                    Login
                </GradientButton>
                <p className="text-gray-500 text-sm">
                    Don&apos;t have an account? <Link href={PAGES.REGISTER} className="text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72]">Register</Link>
                </p>
            </div>
        </form>
    )
}
