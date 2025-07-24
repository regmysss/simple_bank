import { Metadata } from "next";
import RegisterForm from "./RegisterForm";

export const metadata: Metadata = {
    title: "Register",
    description: "Create a new account to start managing your finances with Simple Bank."
}

export default function Page() {
    return (
        <RegisterForm />
    );
}