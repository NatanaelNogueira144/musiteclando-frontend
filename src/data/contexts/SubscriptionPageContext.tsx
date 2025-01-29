'use client'
import Subscription from "@/core/models/Subscription"
import { createContext, useCallback, useEffect, useState } from "react"
import useSubscription from "../hooks/useSubscription"
import { useRouter } from "next/navigation"

export interface SubscriptionPageContextProps {
    isLoading: boolean
    subscription: Subscription|null
    setSubscription: (subscription: Subscription|null) => void
    getSubscription: (subscriptionId: number) => Promise<void>
}

type SubscriptionPageProviderProps = {
    children: React.ReactNode
    subscriptionId: string
}

const SubscriptionPageContext = createContext<SubscriptionPageContextProps>({} as SubscriptionPageContextProps)

export function SubscriptionPageProvider(props: SubscriptionPageProviderProps) {
    const { show } = useSubscription()
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(true)
    const [subscription, setSubscription] = useState(null as Subscription|null)

    const getSubscription = useCallback(async (subscriptionId: number): Promise<void> => {
        try {
            setIsLoading(true)
            setSubscription(await show(subscriptionId))
        } catch(error: unknown) {
            if(error) router.push('/404')
        } finally {
            setIsLoading(false)
        }
    }, [router, show])

    useEffect(() => { 
        getSubscription(parseInt(props.subscriptionId))
    }, [getSubscription, props])

    return (
        <SubscriptionPageContext.Provider value={{ isLoading, subscription, setSubscription, getSubscription }}>
            {props.children}
        </SubscriptionPageContext.Provider>
    )
}

export default SubscriptionPageContext