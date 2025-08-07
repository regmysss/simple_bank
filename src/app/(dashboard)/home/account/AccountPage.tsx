'use client'
import AccountBanner from '@/components/ui/AccountBanner'
import { ArrowRightLeft, Bell, LockKeyhole, LogOut } from 'lucide-react'
import { signOut } from '@/actions/auth'
import React from 'react'
import useAccount from '@/hooks/useAccount'

export default function AccountPage() {
    const { account } = useAccount();
    const userCreatedAt = new Date(account.user.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
    });

    return (
        <>
            <AccountBanner isWelcome={false} />
            <section className="flex items-center justify-between">
                <h3 className="text-xl text-gray-500">{account.user.fullname}</h3>
                <p className="text-3xl font-bold">ID: {account.id}</p>
            </section>
            <section className="grid grid-cols-2 gap-4 text-[#2754C8]">
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
                <button
                    className="bg-white flex items-center justify-between p-5 rounded-lg text-red-500 cursor-pointer"
                    onClick={async () => await signOut()}
                >
                    <div className="flex items-center gap-4">
                        <LogOut />
                        <p className="text-lg font-medium">Log Out</p>
                    </div>
                </button>
            </section>
            <footer className="text-center text-gray-500 mt-8">
                <p>User since {userCreatedAt}</p>
            </footer>
        </>
    )
}
