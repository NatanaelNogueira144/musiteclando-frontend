'use client'
import useAuth from "@/data/hooks/useAuth"
import { usePathname } from "next/navigation"
import LoadingScreen from "./LoadingScreen"
import RedirectScreen from "./RedirectScreen"
import useMessage from "@/data/hooks/useMessage"
import { useEffect } from "react"

export default function ForceStandardUser({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const { loading, user } = useAuth()
    const path = usePathname()
    const { showErrorMessage } = useMessage()

    function redirectTo(url: string) {
        return <RedirectScreen url={url} />
    }

    useEffect(() => {
        if(user?.email && !loading && !user?.is_admin && !user?.is_default) {
            showErrorMessage('Você não tem permissão de acessar essa área!')
        }
    }, [user, loading, showErrorMessage])

    if(!user?.email && loading) return <LoadingScreen />
    if(!user?.email) return redirectTo(`/login?redirect=${path}`)
    if(!user?.is_admin && !user?.is_default) return redirectTo('/calendar')

    return children
}