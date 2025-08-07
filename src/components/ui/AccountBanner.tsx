'use client';
import React from 'react'
import AvailableBalance from './AvailableBalance'
import useAccount from '@/hooks/useAccount';
import AvatarImage from './AvatarImage';

export default function AccountBanner({ isWelcome = true }: { isWelcome?: boolean }) {
    const { account } = useAccount();

    if (isWelcome)
        return (
            <section className="flex items-center justify-between p-5 bg-gradient-to-r from-[#2754C8] to-[#110F72] h-40 rounded-4xl">
                <div
                    className="flex flex-col gap-3 text-white"
                >
                    <p>Welcome</p>
                    <p className="text-2xl font-bold">{account.user.fullname}!</p>
                </div>
                <AvailableBalance balance={account.balance} />
            </section>
        )

    return (
        <section className="flex items-center justify-between p-5 bg-gradient-to-r from-[#2754C8] to-[#110F72] h-40 rounded-4xl">
            <div className="flex items-center justify-center size-26 bg-white rounded-full p-1">
                <div className="relative size-full">
                    <AvatarImage src={account.avatar} />
                </div>
            </div>
            <AvailableBalance balance={account.balance} />
        </section>
    )
}