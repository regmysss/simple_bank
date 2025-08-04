'use server'

import db from "@/lib/db";
import { SignupFormSchema, } from "@/lib/definitions";
import { PAGES } from "@/shared/constants/routes";
import * as bcrypt from 'bcrypt';

type FormState = {
    errors?: {
        name?: string[]
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
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    });

    if (!validatedData.success) {
        const flattened = validatedData.error.flatten().fieldErrors

        return {
            errors: {
                name: flattened.name,
                email: flattened.email,
                password: flattened.password,
                confirmPassword: flattened.confirmPassword,
                global: undefined,
            }
        }
    }

    const { name, email, password } = validatedData.data;

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

        await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

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