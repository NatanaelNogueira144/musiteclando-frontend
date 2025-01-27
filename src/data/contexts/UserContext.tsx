'use client'
import { createContext, useCallback, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useAPI from '../hooks/useAPI'
import IAuthForm from '@/core/interfaces/IAuthForm'
import User from '@/core/models/User'

export interface UserContextProps {
    loading: boolean
    user: User | null
    login: (authForm: IAuthForm) => Promise<User>
    logout: () => void
    edit: (name: string, email: string, password: string) => Promise<void>
}

const UserContext = createContext<UserContextProps>({} as UserContextProps)

export function UserProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { get, set } = useLocalStorage()
    const { httpPost, httpPut } = useAPI()
    
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User|null>(null)

    const loadUser = useCallback((): void => {
        try {
            const localUser = get('user') as User|undefined
            if(localUser) setUser(localUser)
        } finally {
            setLoading(false)
        }
    }, [get])

    async function login(authForm: IAuthForm): Promise<User> {
        const loggedUser: {user?: User, token: string} = await httpPost('login', {
            email: authForm.email,
            password: authForm.password,
            device_name: 'frontend'
        }) as {user: User, token: string}

        const user: User = {...loggedUser.user, token: loggedUser.token} as User
        setUser(user)
        set('user', user)

        return user
    }

    function logout() {
        setUser(null)
        set('user', null)
    }

    async function edit(name: string, email: string, password: string): Promise<void> {
        const user: User = await httpPut('edit', {
            name: name,
            email: email,
            password: password
        }) as User

        const localUser = get('user') as User
        localUser.name = user.name
        localUser.email = user.email
        localUser.password = user.password
        localUser.user_type = user.user_type
        localUser.user_type_name = user.user_type_name
        localUser.avatar_image_url = user.avatar_image_url

        setUser(localUser)
        set('user', localUser)
    }

    useEffect(() => loadUser(), [loadUser])

    return (
        <UserContext.Provider value={{ loading, user, login, logout, edit }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
