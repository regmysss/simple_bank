import { Bell } from "lucide-react";
import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-white px-5">
            <div className="flex items-center justify-end gap-6 mx-auto max-w-[900px] h-20">
                <div className="flex items-center gap-2">
                    <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#2754C8] to-[#110F72] font-medium">John Doe</p>
                    <div className="flex items-center justify-center relative size-10 bg-gradient-to-r from-[#2754C8] to-[#110F72] rounded-full">
                        <Image
                            src="/avatar.jpg"
                            alt="User Avatar"
                            fill
                            className="rounded-full p-1 object-cover"
                        />
                    </div>
                </div>
                <button className="flex items-center justify-center bg-gray-100 size-10 rounded-full cursor-pointer text-gray-500">
                    <Bell />
                </button>
            </div>
        </header>
    )
}
