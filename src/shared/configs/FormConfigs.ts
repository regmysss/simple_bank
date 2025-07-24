export const LOGIN_CONFIG = [
    {
        label: "Email",
        name: "email",
        type: "email",
        required: true,
        pattern: "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/",
    },
    {
        label: "Password",
        name: "password",
        type: "password",
        required: true,
        pattern: ".{8,24}",
    },
]

export const REGISTER_CONFIG = [
    {
        label: "Full Name",
        name: "fullName",
        type: "text",
        required: true,
        pattern: ".{2,50}",
    },
    {
        label: "Email",
        name: "email",
        type: "email",
        required: true,
        pattern: "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/",
    },
    {
        label: "Password",
        name: "password",
        type: "password",
        required: true,
        pattern: ".{8,24}",
    },
    {
        label: "Confirm Password",
        name: "confirmPassword",
        type: "password",
        required: true,
    },
]