'use client'
import { useCallback } from "react";
import useAPI from "./useAPI";

export interface PaginatorFilters {
    page: number
    perPage: number
    search: string
    orderBy: string
    isDescendant: boolean
}

export interface Paginator {
    current_page: number
    data: unknown[]
    from: number
    last_page: number
    per_page: number
    to: number
    total: number
}

export default function usePaginator() {
    const { httpGet } = useAPI()

    const get = useCallback(async (
        url: string, 
        params: {[key: string]: string}
    ): Promise<Paginator> => {
        return await httpGet(`${url}?${new URLSearchParams(params).toString()}`) as Paginator
    }, [httpGet])

    return { get }
}