'use client'
import { useCallback } from 'react'
import useAPI from './useAPI'
import Subscription from '@/core/models/Subscription'
import usePaginator, { Paginator, PaginatorFilters } from './usePaginator'
import ISubscriptionForm from '@/core/interfaces/ISubscriptionForm'

export default function useSubscription() {
    const { httpGet, httpPost, httpPut, httpDelete } = useAPI()
    const { get } = usePaginator()
    
    const list = useCallback(async (params: PaginatorFilters): Promise<Paginator> => {
        return await get('subscriptions', {
            ...params,
            page: params.page.toString(),
            perPage: params.perPage.toString(),
            isDescendant: params.isDescendant.toString()
        })
    }, [get])

    const store = useCallback(async (subscriptionForm: ISubscriptionForm): Promise<Subscription> => {
        return await httpPost('subscriptions', {...subscriptionForm}) as Subscription
    }, [httpPost])
    
    const publicStore = useCallback(async (subscriptionForm: ISubscriptionForm): Promise<Subscription> => {
        return await httpPost('subscription', {...subscriptionForm}) as Subscription
    }, [httpPost])

    const show = useCallback(async (id: number): Promise<Subscription> => {
        return await httpGet(`subscriptions/${id}`) as Subscription
    }, [httpGet])

    const update = useCallback(async (id: number, subscriptionForm: ISubscriptionForm): Promise<Subscription> => {
        return await httpPut(`subscriptions/${id}`, {...subscriptionForm, id: id}) as Subscription
    }, [httpPut])

    const destroy = useCallback(async (id: number): Promise<void> => await httpDelete(`subscriptions/${id}`), [httpDelete])

    return { list, store, publicStore, show, update, destroy }
}
