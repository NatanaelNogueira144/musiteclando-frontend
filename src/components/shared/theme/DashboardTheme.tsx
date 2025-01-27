'use client'
import { DashboardThemeProvider } from "@/data/contexts/DashboardThemeContext"
import useDashboardTheme from "@/data/hooks/useDashboardTheme"
import LoadingPage from "../LoadingPage"
import DashboardHeader from './DashboardHeader'
import DashboardFooter from './DashboardFooter'

export interface ThemeProps {
    children: React.ReactNode
}

export default function DashboardTheme(props: ThemeProps) {
    function ThemeBody() {
        const { isLoading } = useDashboardTheme()

        return (
            <div className="flex flex-col min-h-screen w-full">
                <DashboardHeader />
                <div className="flex flex-row w-full">
                    <div className="flex-1 w-full">
                        {isLoading ? <LoadingPage /> : <>
                            <main className="bg-[url('/images/app-background.jpg')] bg-no-repeat bg-cover bg-center bg-fixed min-h-screen w-full">
                                {props.children}
                            </main>
                            <DashboardFooter />
                        </>}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <DashboardThemeProvider>
            <ThemeBody />
        </DashboardThemeProvider>
    )
}