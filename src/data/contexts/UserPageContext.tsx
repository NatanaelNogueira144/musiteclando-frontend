'use client'
import User from "@/core/models/User"
import { createContext, useCallback, useEffect, useState } from "react"
import useUser from "../hooks/useUser"
import { useRouter } from "next/navigation"

export interface UserPageContextProps {
    isLoading: boolean
    user: User|null
    setUser: (user: User|null) => void
    getUser: (userId: number) => Promise<void>
}

type UserPageProviderProps = {
    children: React.ReactNode
    userId: string
}

const UserPageContext = createContext<UserPageContextProps>({} as UserPageContextProps)

export function UserPageProvider(props: UserPageProviderProps) {
    const { show } = useUser()
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null as User|null)

    const getUser = useCallback(async (userId: number): Promise<void> => {
        try {
            setIsLoading(true)
            setUser(await show(userId))
        } catch(error: unknown) {
            if(error) router.push('/404')
        } finally {
            setIsLoading(false)
        }
    }, [router, show])

    useEffect(() => { 
        getUser(parseInt(props.userId))
    }, [getUser, props])

    return (
        <UserPageContext.Provider value={{ isLoading, user, setUser, getUser }}>
            {props.children}
        </UserPageContext.Provider>
    )
}

export default UserPageContext