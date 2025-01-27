'use client'
import { useCallback } from 'react'
import useAPI from './useAPI'
import User from '@/core/models/User'
import usePaginator, { Paginator, PaginatorFilters } from './usePaginator'
import IUserForm from '@/core/interfaces/IUserForm'

export default function useUser() {
    const { httpGet, httpPost, httpPut, httpDelete } = useAPI()
    const { get } = usePaginator()
    
    const list = useCallback(async (params: PaginatorFilters): Promise<Paginator> => {
        return await get('users', {
            ...params,
            page: params.page.toString(),
            perPage: params.perPage.toString(),
            isDescendant: params.isDescendant.toString()
        })
    }, [get])

    const store = useCallback(async (userForm: IUserForm): Promise<User> => {
        return await httpPost('users', {...userForm}) as User
    }, [httpPost])

    const show = useCallback(async (id: number): Promise<User> => await httpGet(`users/${id}`) as User, [httpGet])

    const update = useCallback(async (id: number, userForm: IUserForm, updatePassword: boolean = false): Promise<User> => {
        return await httpPut(`users/${id}`, {...userForm, id: id, update_password: updatePassword}) as User
    }, [httpPut])

    const destroy = useCallback(async (id: number): Promise<void> => await httpDelete(`users/${id}`), [httpDelete])

    return { list, store, show, update, destroy }
}
