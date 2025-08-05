import type { Metadata } from "next";
import DepositMoney from "./DepositMoney";

export const metadata: Metadata = {
    title: "Deposit Money",
    description: "Deposit money into your account",
}

export default function Page() {
    return (<DepositMoney />);
}