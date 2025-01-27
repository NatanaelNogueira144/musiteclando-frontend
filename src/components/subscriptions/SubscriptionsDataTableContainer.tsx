'use client'
import { DataTableProvider } from "@/data/contexts/DataTableContext"
import useSubscription from "@/data/hooks/useSubscription"
import { IconPlus } from "@tabler/icons-react"
import { useContext } from "react"
import DashboardThemeContext from "@/data/contexts/DashboardThemeContext"
import DataTableLimitSelect from "../shared/data-table/DataTableLimitSelect"
import DataTableSearchInput from "../shared/data-table/DataTableSearchInput"
import Container from "../shared/Container"
import SubscriptionsDataTable from "./SubscriptionsDataTable"

export default function SubscriptionsDataTableContainer() {
    const { list } = useSubscription()
    const { redirectTo } = useContext(DashboardThemeContext)

    return (
        <DataTableProvider getList={list}>
            <Container>
                <div className="flex flex-col gap-2 min-h-screen">
                    <div className="flex flex-wrap justify-between gap-2">
                        <button type="button" className="action-button flex items-center" 
                            onClick={() => redirectTo('subscriptions/create')}>
                            <IconPlus /> 
                            <span>Registrar Inscrição</span>
                        </button>
                        <div className="flex flex-row gap-2">
                            <DataTableLimitSelect />
                            <DataTableSearchInput />
                        </div>
                    </div>

                    <SubscriptionsDataTable />
                </div>
            </Container>
        </DataTableProvider>
    )
}