import Link from 'next/link'
import React from 'react'

interface NavigationItemProps {
    navigationItem: {
        name: string;
        link: string;
        icon: React.ComponentType;
    };
    rootPath: string;
}

export default function NavigationItem({ navigationItem, rootPath }: NavigationItemProps) {
    return (
        <li className={`relative ${rootPath === navigationItem.link
            ? 'bg-[#EEF2FF] before:content-[""] before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-[#2754C8]'
            : ''}`}
        >
            <Link
                href={navigationItem.link}
                className={`flex items-center gap-3 p-4 ${rootPath === navigationItem.link ? 'text-[#2754C8] font-medium' : 'text-gray-500 font-light'}`}
            >
                <navigationItem.icon />
                <span>{navigationItem.name}</span>
            </Link>
        </li>
    )
}
