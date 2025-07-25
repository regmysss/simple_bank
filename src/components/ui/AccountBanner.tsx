import Image from 'next/image'
import React from 'react'
import AvailableBalance from './AvailableBalance'

const BALANCE = "1231.32";

export default function AccountBanner({ isWelcome = true }: { isWelcome?: boolean }) {
    if (isWelcome)
        return (
            <section className="flex items-center justify-between p-5 bg-gradient-to-r from-[#2754C8] to-[#110F72] h-40 rounded-4xl">
                <div
                    className="flex flex-col gap-3 text-white"
                >
                    <p>Welcome</p>
                    <p className="text-2xl font-bold">John Doe!</p>
                </div>
                <AvailableBalance balance={BALANCE} />
            </section>
        )

    return (
        <section className="flex items-center justify-between p-5 bg-gradient-to-r from-[#2754C8] to-[#110F72] h-40 rounded-4xl">
            <div className="flex items-center justify-center relative size-26 bg-white rounded-full">
                <Image
                    src="/avatar.jpg"
                    alt="User Avatar"
                    fill
                    className="rounded-full p-1 object-cover"
                />
            </div>
            <AvailableBalance balance={BALANCE} />
        </section>
    )
}