import { useCallback } from 'react'
import useAPI from './useAPI'
import Notification from '@/core/models/Notification'

export default function useNotification() {
    const { httpGet, httpPatch } = useAPI()
    
    const getAllUnread = useCallback(async (): Promise<Notification[]|null> => {
        return await httpGet('notifications/get-all-unread') as Notification[]
    }, [httpGet])

    const markAllAsRead = useCallback(async (): Promise<void> => {
        await httpPatch('notifications/mark-all-as-read', {})
    }, [httpPatch])

    return { getAllUnread, markAllAsRead }
}
