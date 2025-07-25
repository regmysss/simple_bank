import AccountBanner from "@/components/ui/AccountBanner";
import { ArrowRightLeft, Bell, LockKeyhole, LogOut } from "lucide-react";

export default function Page() {
    return (
        <div className="flex flex-col gap-8 w-full">
            <h2 className="text-lg font-medium">Account</h2>
            <AccountBanner isWelcome={false} />
            <div className="flex items-center justify-between">
                <h3 className="text-xl text-gray-500">John Doe</h3>
                <p className="text-3xl font-bold">ID: 1235346451234</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-[#2754C8]">
                <div className="bg-white flex items-center justify-between p-5 rounded-lg">
                    <div className="flex items-center gap-4">
                        <Bell />
                        <p className="text-lg font-medium">Notifications</p>
                    </div>
                    <button className="flex items-center justify-end bg-[#19BD56] w-12 h-7 p-1 rounded-full">
                        <div className="bg-white size-5 rounded-full"></div>
                    </button>
                </div>
                <div className="bg-white flex items-center justify-between p-5 rounded-lg">
                    <div className="flex items-center gap-4">
                        <LockKeyhole />
                        <p className="text-lg font-medium">Password</p>
                    </div>
                    <button className="cursor-pointer">
                        Change
                    </button>
                </div>
                <div className="bg-white flex items-center justify-between p-5 rounded-lg">
                    <div className="flex items-center gap-4">
                        <ArrowRightLeft />
                        <p className="text-lg font-medium">Transaction Pin</p>
                    </div>
                    <button className="cursor-pointer">
                        Change
                    </button>
                </div>
                <div className="bg-white flex items-center justify-between p-5 rounded-lg text-red-500">
                    <div className="flex items-center gap-4">
                        <LogOut />
                        <p className="text-lg font-medium">Log Out</p>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-500 mt-8">
                <p>User since 2023</p>
            </div>
        </div>
    );
}