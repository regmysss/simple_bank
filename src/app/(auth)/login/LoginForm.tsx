'use client'
import { signIn } from "@/actions/auth";
import AuthFormInput from "@/components/ui/AuthFormInput";
import GradientButton from "@/components/ui/GradientButton";
import { LOGIN_CONFIG } from "@/shared/configs/AuthFormConfigs";
import { PAGES } from "@/shared/constants/routes";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [state, action, pending] = useActionState(signIn, undefined);
    const router = useRouter();

    useEffect(() => {
        if (state?.success && state.redirectTo) {
            router.replace(state.redirectTo);
        }
    }, [state?.success, state?.redirectTo, router]);

    return (
        <form
            className="bg-white/50 p-3 rounded-4xl max-w-[500px] w-full"
            action={action}
        >
            <div className="bg-white w-full py-4 px-8 rounded-[20px] flex flex-col items-center">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72] mb-4">Login</h1>
                {
                    LOGIN_CONFIG.map((input) => (
                        <AuthFormInput
                            key={input.name}
                            {...input}
                        >
                            {
                                state?.errors?.[input.name as keyof typeof state.errors] &&
                                <p className='text-red-500 text-sm'>{state.errors[input.name as keyof typeof state.errors]}</p>
                            }
                        </AuthFormInput>
                    ))
                }
                <Link href={PAGES.FORGOT_PASSWORD} className="text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72] mb-4 text-sm w-full text-right">
                    Forgot Password?
                </Link>
                {
                    state?.errors?.global &&
                    <p className='text-red-500 text-sm mb-4'>{state.errors.global}</p>
                }
                <GradientButton
                    type="submit"
                    disabled={pending}
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
