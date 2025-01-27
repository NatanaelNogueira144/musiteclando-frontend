'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/" className="flex items-center h-14">
            <Image src="/logo.png" alt="Logo" width={42} height={42} className="block w-auto h-auto" priority />
        </Link>
    )
}
