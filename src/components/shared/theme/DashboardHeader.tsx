import useAuth from "@/data/hooks/useAuth"
import Logo from "../Logo"
import Link from "next/link"
import DashboardAvatarMenu from "./DashboardAvatarMenu"

export default function DashboardHeader() {
    const { user } = useAuth()

    return (
        <header className={`
            self-stretch flex justify-center items-center h-16 bg-gray-900 sticky top-0 z-50 w-full text-white
        `}>
            <nav className="flex items-center justify-between w-full mx-5">
                <div className="flex gap-2 items-center w-60 justify-between">
                    <Logo />
                </div>
                <div>
                    {user ? (<DashboardAvatarMenu user={user} />) : (<Link href="/login">Entrar</Link>)}
                </div>
            </nav>
        </header>
    )
}