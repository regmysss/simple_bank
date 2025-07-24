import { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your Simple Bank account to manage your finances."
};

export default function Page() {
    return (
        <LoginForm />
    );
}