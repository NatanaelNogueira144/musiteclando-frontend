'use client'
import { usePathname, useRouter } from "next/navigation"
import { createContext, useCallback, useEffect, useState } from "react"

export interface DashboardThemeContextProps {
    isExpanded: boolean
    setIsExpanded: (isExpanded: boolean) => void 
    isLoading: boolean
    setIsLoading: (isLoading: boolean) => void 
    redirectTo: (uri: string) => void
}

const DashboardThemeContext = createContext<DashboardThemeContextProps>({} as DashboardThemeContextProps)

export function DashboardThemeProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isLoading, setIsLoading] = useState(true)
    const [isExpanded, setIsExpanded] = useState(true)
    const pathname = usePathname()
    const router = useRouter()

    const redirectTo = useCallback((uri: string): void => {
        if(pathname !== `/${uri}`) setIsLoading(true)
        router.push(`/${uri}`)
    }, [pathname, router])

    useEffect(() => setIsLoading(false), [])

    return (
        <DashboardThemeContext.Provider value={{ isExpanded, setIsExpanded, isLoading, setIsLoading, redirectTo }}>
            {children}
        </DashboardThemeContext.Provider>
    )
}

export default DashboardThemeContext