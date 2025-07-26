import AccountBanner from "@/components/ui/AccountBanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import RecentTransactionItem from "@/components/ui/TransactionItem";
import { HISTORY } from "@/shared/constants/history";
import { PAGES } from "@/shared/constants/routes";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to Simple Bank, your personal finance management app."
}

export default function Page() {
    return (
        <div className="flex flex-col gap-8">
            <Breadcrumb />
            <AccountBanner />
            <section>
                <div className="flex items-center justify-between mb-8">
                    <h3 className="font-medium">Recent Transactions</h3>
                    <Link
                        href={PAGES.HISTORY}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72]"
                    >
                        See all
                    </Link>
                </div>
                <section>
                    <ul>
                        {
                            HISTORY.map((transaction) => (
                                <li key={transaction.id} className="mb-4"><RecentTransactionItem transaction={transaction} /></li>
                            ))
                        }
                    </ul>
                </section>
            </section>
        </div>
    );
}