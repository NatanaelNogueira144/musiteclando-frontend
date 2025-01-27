'use client'
import useAuth from "@/data/hooks/useAuth"
import { usePathname } from "next/navigation"
import LoadingScreen from "./LoadingScreen"
import RedirectScreen from "./RedirectScreen"

export default function ForceUser({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const { loading, user } = useAuth()
    const path = usePathname()
    
    function redirectTo(url: string) {
        return <RedirectScreen url={url} />
    }

    if(!user?.email && loading) return <LoadingScreen />
    if(!user?.email) return redirectTo(`/login?redirect=${path}`)

    return children
}