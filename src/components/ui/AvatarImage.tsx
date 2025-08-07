import Image from 'next/image'
import React from 'react'

export default function AvatarImage({ src }: { src: string }) {
    return (
        <Image
            src={src ? src : "/avatar.png"}
            alt="Avatar"
            fill
            className="rounded-full object-cover"
        />
    )
}
