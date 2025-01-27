'use client'
import { useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
import Logo from "./Logo";
import { useRouter } from "next/navigation";

interface RedirectScreenProps {
    url: string
}

export default function RedirectScreen({ url }: RedirectScreenProps) {
    const router = useRouter()
    
    useEffect(() => router.push(url), [router, url])

    return (
        <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
            <Logo />
            <span>Redirecionando...</span>
            <Skeleton className="h-4 w-20 bg-gray-700" />
        </div>
    )
}