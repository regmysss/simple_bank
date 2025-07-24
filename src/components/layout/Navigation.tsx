'use client'
import { NAVIGATION } from "@/shared/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <aside className="flex flex-col items-center bg-white w-64">
            <div className="flex items-center justify-center h-20">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72]">Simple Bank</h1>
            </div>
            <hr
                className="w-full border-gray-200 my-4"
            />
            <nav className="w-full px-2">
                <ul className="flex flex-col gap-4">
                    {
                        NAVIGATION.map((item) => (
                            <li key={item.name} className={`relative ${pathname === item.link ? 'bg-[#EEF2FF] before:content-[""] before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-[#2754C8]' : ''}`}>
                                <Link
                                    href={item.link}
                                    className={`flex items-center gap-3 p-4 ${pathname === item.link ? 'text-[#2754C8]' : 'text-gray-500'}`}
                                >
                                    <item.icon />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    )
}
