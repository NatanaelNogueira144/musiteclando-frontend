'use client'
import { createContext, useCallback, useEffect, useState } from "react"
import { Paginator, PaginatorFilters } from "../hooks/usePaginator"

export interface DataTableContextProps {
    filters: PaginatorFilters
    setFilters: (filters: PaginatorFilters) => void 
    paginator: Paginator|null
    refresh: () => Promise<void>
    isLoading: boolean
}

interface DataTableProviderProps {
    children?: React.ReactNode
    getList: (filters: PaginatorFilters) => Promise<Paginator>
    filters?: PaginatorFilters
}

const DataTableContext = createContext<DataTableContextProps>({} as DataTableContextProps)

export function DataTableProvider(props: DataTableProviderProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [paginator, setPaginator] = useState(null as Paginator|null)
    const [filters, setFilters] = useState(props.filters ?? {
        page: 1, 
        perPage: 10, 
        search: '', 
        orderBy: 'id', 
        isDescendant: false
    } as PaginatorFilters)

    const getList = useCallback(async (
        filters: PaginatorFilters, 
        callback: (filters: PaginatorFilters) => Promise<Paginator>
    ): Promise<void> => {
        try {
            setIsLoading(true)
            setPaginator(await callback(filters))
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => { getList(filters, props.getList) }, [filters, getList, props])

    async function refresh(): Promise<void> {
        await getList(filters, props.getList)
    }

    return (
        <DataTableContext.Provider value={{ isLoading, filters, setFilters, paginator, refresh }}>
            {props.children}
        </DataTableContext.Provider>
    )
}

export default DataTableContext