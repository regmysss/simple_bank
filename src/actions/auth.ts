'use server'

import db from "@/lib/db";
import { SigninFormSchema, SignupFormSchema, } from "@/lib/definitions";
import { createSession, deleteSession } from "@/lib/session";
import { PAGES } from "@/shared/constants/routes";
import * as bcrypt from 'bcrypt';
import { redirect, RedirectType } from "next/navigation";

type FormState = {
    errors?: {
        fullname?: string[]
        email?: string[]
        password?: string[]
        confirmPassword?: string[]
        global?: string[]
    }
    message?: string
    redirectTo?: string
    success?: boolean
} | undefined


export async function signUp(state: FormState, formData: FormData) {
    const validatedData = SignupFormSchema.safeParse({
        fullname: formData.get('fullname'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    });

    if (!validatedData.success) {
        const flattened = validatedData.error.flatten().fieldErrors

        return {
            errors: {
                fullname: flattened.fullname,
                email: flattened.email,
                password: flattened.password,
                confirmPassword: flattened.confirmPassword,
                global: undefined,
            }
        }
    }

    const { fullname, email, password } = validatedData.data;

    try {
        const existingUser = await db.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return {
                errors: { email: ["Email is already registered."] },
            };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.user.create(
            {
                data: {
                    fullname,
                    email,
                    password: hashedPassword,
                    account: {
                        create: {
                            balance: 0,
                        }
                    }
                },
            }
        );

        return {
            success: true,
            redirectTo: PAGES.LOGIN,
        }
    }
    catch (error) {
        console.error("Error during registration:", error);
        return {
            errors: { global: ["An error occurred during registration. Please try again later."] },
        };
    }
}

export async function signIn(state: FormState, formData: FormData) {
    const validatedData = SigninFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!validatedData.success) {
        const flattened = validatedData.error.flatten().fieldErrors;

        return {
            errors: {
                email: flattened.email,
                password: flattened.password,
                global: undefined,
            }
        };
    }

    const { email, password } = validatedData.data;

    try {
        const user = await db.user.findUnique({
            where: { email },
        });

        if (!user)
            return {
                errors: { global: ["You have entered incorrect data!"] },
            };

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return {
                errors: { global: ["You have entered incorrect data!"] },
            };
        }

        await createSession(user.id);

        return {
            success: true,
            redirectTo: PAGES.HOME,
        }
    } catch (error) {
        console.error("Error during login:", error);
        return {
            errors: { global: ["An error occurred during login. Please try again later."] },
        };
    }
}

export async function signOut() {
    await deleteSession();
    redirect(PAGES.LOGIN, RedirectType.replace);
}