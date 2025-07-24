import { Metadata } from "next";
import ForgotPasswordForm from "./ForgotPasswordForm";

export const metadata: Metadata = {
    title: "Forgot Password",
    description: "Reset your password",
}

export default function Page() {
    return (
        <ForgotPasswordForm />
    );
}