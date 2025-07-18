'use client'
import { useCallback } from 'react'
import useLocalStorage from './useLocalStorage'
import User from '@/core/models/User'
import ValidationError from '@/core/exceptions/ValidationError'
import useMessage from './useMessage'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE

export default function useAPI() {
    const { get } = useLocalStorage()
    const { showErrorMessage } = useMessage()

    const sendAndGetData = useCallback(async (
        method: string, 
        uri: string, 
        body?: {[key: string]: unknown}|FormData, 
        headers?: {[key: string]: string}
    ): Promise<unknown> => {
        const user: User|undefined = get('user') as User|undefined

        if(!headers) {
            headers = {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }

        const response = await fetch(`${API_BASE}/${uri}`, {
            method: method,
            headers: {
                "Authorization": user ? `Bearer ${user.token}` : "",
                ...headers
            },
            body: body ? (body instanceof FormData ? body : JSON.stringify(body)) : null
        })

        const data: { message?: string, errors?: {[key: string]: string} } = await response.json()
        if(!response?.ok) {
            if(data.message) showErrorMessage(data.message)
            if(data.errors) {
                throw new ValidationError(data.errors)
            } else {
                throw new Error(data.message)
            }
        }

        return data
    }, [showErrorMessage, get])

    const httpGet = useCallback(async (
        uri: string, 
        headers?: {[key: string]: string}
    ): Promise<unknown> => await sendAndGetData('GET', uri, headers), [sendAndGetData])

    const httpPost = useCallback(async (
        uri: string, 
        body: {[key: string]: unknown}|FormData, 
        headers?: {[key: string]: string}
    ): Promise<unknown> => await sendAndGetData('POST', uri, body, headers), [sendAndGetData])

    const httpPut = useCallback(async (
        uri: string, 
        body: {[key: string]: unknown}|FormData, 
        headers?: {[key: string]: string}
    ): Promise<unknown> => await sendAndGetData('PUT', uri, body, headers), [sendAndGetData])

    const httpPatch = useCallback(async (
        uri: string, 
        body: {[key: string]: unknown}|FormData, 
        headers?: {[key: string]: string}
    ): Promise<unknown> => await sendAndGetData('PATCH', uri, body, headers), [sendAndGetData])

    const httpDelete = useCallback(async (
        uri: string, 
        headers?: {[key: string]: string}
    ): Promise<void> => await sendAndGetData('DELETE', uri, headers) as void, [sendAndGetData])

    const httpBlob = useCallback(async (
        uri: string, 
        body: unknown, 
        headers?: {[key: string]: string}
    ): Promise<Blob|unknown> => {
        try {
            const user: User|undefined = get('user') as User|undefined
            if(!headers) {
                headers = {
                    "Content-Type": "application/json",
                    "Accept": "application/json", 
                }
            }

            const response = await fetch(`${API_BASE}/${uri}`, {
                method: 'POST',
                headers: {
                    "Authorization": user ? `Bearer ${user?.token}` : "",
                    ...(headers as object)
                },
                body: body ? (body instanceof FormData ? body : JSON.stringify(body)) : null
            })

            if(!response?.ok) {
                const data: { message?: string, errors?: {[key: string]: string} } = await response.json()
                if(data.message) showErrorMessage(data.message)
                if(data.errors) throw new ValidationError(data.errors)
                return data
            } else {
                const data = await response.blob()
                return data
            }
        } catch(error: unknown) {
            if(error instanceof ValidationError) throw error 
        }
    }, [get, showErrorMessage])

    return { API_BASE, httpGet, httpPost, httpPut, httpPatch, httpDelete, httpBlob }
}
