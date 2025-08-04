export const LOGIN_CONFIG = [
    {
        label: "Email",
        name: "email",
        type: "email",
        required: true,
        pattern: "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/",
        placeholder: "example@gmail.com",
    },
    {
        label: "Password",
        name: "password",
        type: "password",
        required: true,
        pattern: ".{8,24}",
        placeholder: "8 symbols at least",
    },
]

export const REGISTER_CONFIG = [
    {
        label: "Full Name",
        name: "name",
        type: "text",
        required: true,
        placeholder: "John Doe",
    },
    {
        label: "Email",
        name: "email",
        type: "email",
        required: true,
        placeholder: "example@gmail.com",
    },
    {
        label: "Password",
        name: "password",
        type: "password",
        required: true,
        placeholder: "8 symbols at least",
    },
    {
        label: "Confirm Password",
        name: "confirmPassword",
        type: "password",
        required: true,
        placeholder: "Repeat your password",
    },
]