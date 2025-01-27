'use client'
import { useCallback } from "react"
import { toast } from "react-toastify"

export default function useMessage() {
    const showSuccessMessage = useCallback((message: string): void => {
        toast(message, {
            position: 'bottom-right',
            type: 'success',
            closeOnClick: true,
            progress: undefined,
            theme: 'dark',
        })
    }, [])

    const showErrorMessage = useCallback((message: string): void => {
        toast(message, {
            position: 'bottom-right',
            type: 'error',
            closeOnClick: true,
            progress: undefined,
            theme: 'dark',
        })
    }, [])

    return { showSuccessMessage, showErrorMessage }
}