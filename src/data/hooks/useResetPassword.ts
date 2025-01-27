'use client'
import { useCallback } from 'react'
import useAPI from './useAPI'

export default function useResetPassword() {
    const { httpPost } = useAPI()
    
    const sendEmail = useCallback(async (email: string): Promise<void> => {
        await httpPost('forgot-password', { email: email })
    }, [httpPost])

    const resetPassword = useCallback(async (token: string, email: string, newPassword: string): Promise<void> => {
        await httpPost(`reset-password/${token}`, { 
            email: email,
            password: newPassword 
        })
    }, [httpPost])

    return { sendEmail, resetPassword }
}
