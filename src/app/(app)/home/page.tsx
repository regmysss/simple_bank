import RecentTransactionItem from "@/components/ui/TransactionItem";
import { HISTORY } from "@/shared/constants/history";
import { PAGES } from "@/shared/constants/routes";
import type { ITransaction } from "@/shared/types/transactions";
import { Eye } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <section className="flex flex-col gap-8 w-full">
            <h2 className="text-lg font-medium">Home</h2>
            <dl className="flex items-center justify-between p-5 bg-gradient-to-r from-[#2754C8] to-[#110F72] h-40 rounded-4xl">
                <div
                    className="flex flex-col gap-3 text-white"
                >
                    <dt>Welcome</dt>
                    <dd className="text-2xl font-bold">John Doe!</dd>
                </div>
                <div
                    className="flex flex-col gap-3 text-white text-right"
                >
                    <div className="flex items-center justify-end gap-2 text-lg">
                        <Eye />
                        <p>Balance</p>
                    </div>
                    <p className="text-lg">$ <span className="font-bold text-3xl">1 212 321</span></p>
                </div>
            </dl>
            <div className="flex items-center justify-between">
                <h3 className="font-medium">Recent Transactions</h3>
                <Link
                    href={PAGES.HISTORY}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72]"
                >
                    See all
                </Link>
            </div>
            <div>
                <ul>
                    {
                        HISTORY.map((transaction) => (
                            <li key={transaction.id} className="mb-4"><RecentTransactionItem transaction={transaction} /></li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}