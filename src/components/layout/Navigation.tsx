'use client'
import { NAVIGATION } from "@/shared/constants/navigation";
import { usePathname } from "next/navigation";
import NavigationItem from "../ui/NavigationItem";

export default function Navigation() {
    const pathname = usePathname();

    const rootPath = `/${pathname.split('/').filter(Boolean)[0]}`;

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
                            <NavigationItem key={item.name} navigationItem={item} rootPath={rootPath} />
                        ))
                    }
                </ul>
            </nav>
        </aside>
    )
}
