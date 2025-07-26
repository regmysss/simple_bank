import Breadcrumb from "@/components/ui/Breadcrumb";
import DepositMethodItem from "@/components/ui/DepositMethodItem";
import { DEPOSIT_METHODS } from "@/shared/constants/depositMethods";
import { CircleX } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Deposit Money",
    description: "Deposit money into your account",
}

export default function Page() {
    return (
        <div className="h-full flex flex-col">
            <Breadcrumb />
            <section className="h-full flex items-center justify-center">
                <div className="max-w-[380px] w-full">
                    <div className="w-full mb-6">
                        <label
                            htmlFor="deposit-amount"
                            className="block mb-2"
                        >
                            Deposit Amount (USD)
                        </label>
                        <div className="flex justify-between items-center gap-3 bg-white p-4 border-b-1 border-gray-200">
                            <span>$</span>
                            <input
                                className="w-full outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                type="number"
                                placeholder="0.00"
                                name="deposit-amount"
                                required
                            />
                            <button
                                className="text-gray-500 cursor-pointer"
                            >
                                <CircleX className="size-5" />
                            </button>
                        </div>
                    </div>
                    <fieldset className="w-full mb-6">
                        <legend className="mt-4">Deposit type</legend>
                        <div className="flex flex-col gap-2 mt-2">
                            {
                                DEPOSIT_METHODS.map((method) => (
                                    <DepositMethodItem
                                        key={method.value}
                                        depositMethod={method}
                                    />
                                ))
                            }
                        </div>
                    </fieldset>
                    <button
                        className="w-full bg-gradient-to-r from-[#2754C8] to-[#110F72] text-white py-2 rounded-lg cursor-pointer mb-4"
                    >
                        Deposit
                    </button>
                </div>
            </section>
        </div>
    );
}