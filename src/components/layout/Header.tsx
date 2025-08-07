'use client';
import useAccount from "@/hooks/useAccount";
import { PAGES } from "@/shared/constants/routes";
import { Bell } from "lucide-react";
import Link from "next/link";
import AvatarImage from "../ui/AvatarImage";

export default function Header() {
    const { account } = useAccount();

    return (
        <header className="bg-white px-5">
            <div className="flex items-center justify-end gap-6 mx-auto max-w-[900px] h-20">
                <Link
                    href={PAGES.ACCOUNT}
                    className="flex items-center gap-2"
                >
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72] font-medium">{account.user.fullname}</p>
                    <div className="flex items-center justify-center size-10 bg-gradient-to-r from-[#2754C8] to-[#110F72] rounded-full p-1">
                        <div className="relative size-full">
                            <AvatarImage src={account.avatar} />
                        </div>
                    </div>
                </Link>
                <button className="flex items-center justify-center bg-gray-100 size-10 rounded-full cursor-pointer text-gray-500">
                    <Bell />
                </button>
            </div>
        </header>
    )
}
