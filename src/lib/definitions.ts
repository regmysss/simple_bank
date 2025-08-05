import z from 'zod';

export const SignupFormSchema = z.object({
    fullname: z
        .string()
        .regex(/^[A-Z][a-z]+(\s[A-Z][a-z]?){0,}/, {
            message: 'Please enter a valid full name (e.g., John Doe).'
        }),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/, {
            message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
        })
        .trim(),
    confirmPassword: z
        .string()
        .trim()
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
});

export const SigninFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z.string().trim(),
});