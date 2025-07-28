'use client'

import DepositMethodItem from "@/components/ui/DepositMethodItem";
import GradientButton from "@/components/ui/GradientButton";
import TransactionFormInput from "@/components/ui/TransactionFormInput";
import { DEPOSIT_METHODS } from "@/shared/constants/depositMethods";
import { useState } from "react";

export default function DepositMoney() {
    const [formData, setFormData] = useState({
        "deposit-amount": '',
        "deposit-method": ''
    });

    return (
        <form className="w-full">
            <TransactionFormInput
                label="Deposit Amount"
                name="deposit-amount"
                type="number"
                placeholder="0.00"
                required
                currencySymbol={true}
                onChange={(e) => setFormData({ ...formData, "deposit-amount": e.target.value })}
                onClick={(e) => {
                    e.preventDefault();
                    setFormData({ ...formData, "deposit-amount": '' });
                }}
                value={formData["deposit-amount"]}
            />
            <fieldset className="w-full mb-6">
                <legend className="mt-4">Deposit type</legend>
                <div className="flex flex-col gap-2 mt-2">
                    {
                        DEPOSIT_METHODS.map((method) => (
                            <DepositMethodItem
                                key={method.value}
                                label={method.label}
                                defaultChecked={method.defaultChecked}
                                onChange={(e) => setFormData({ ...formData, "deposit-method": e.target.value })}
                            />
                        ))
                    }
                </div>
            </fieldset>
            <GradientButton>Deposit</GradientButton>
        </form>
    )
}
