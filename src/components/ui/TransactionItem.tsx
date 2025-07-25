import type { ITransaction } from '@/shared/types/transactions'
import { ArrowBigUp, ArrowBigDown } from "lucide-react";

export default function RecentTransactionItem({ transaction }: { transaction: ITransaction }) {
    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-lg">
            <div className="flex items-center justify-between gap-2">
                <div className="size-11 flex items-center justify-center rounded-full bg-[#EEF2FF]">
                    {
                        transaction.type === 'deposit'
                            ? (<ArrowBigDown className="text-[#19BD56]" />)
                            : (<ArrowBigUp className="text-[#2754C8]" />)
                    }
                </div>
                <div>
                    <h4 className="text-lg font-medium mb-1">{transaction.type === 'deposit' ? "Deposit" : "Money Sent"}</h4>
                    <p className="text-gray-500">{transaction.date} | {transaction.description}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-xl font-medium mb-1">{transaction.amount}</p>
                {
                    transaction.isSuccessful
                        ? (<span className="text-green-500">Successful</span>)
                        : (<span className="text-red-500">Failed</span>)
                }
            </div>
        </div>
    )
}
