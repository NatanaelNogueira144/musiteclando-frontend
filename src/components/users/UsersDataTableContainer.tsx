'use client'
import { DataTableProvider } from "@/data/contexts/DataTableContext"
import useUser from "@/data/hooks/useUser"
import { IconPlus } from "@tabler/icons-react"
import { useContext } from "react"
import DashboardThemeContext from "@/data/contexts/DashboardThemeContext"
import DataTableLimitSelect from "../shared/data-table/DataTableLimitSelect"
import DataTableSearchInput from "../shared/data-table/DataTableSearchInput"
import Container from "../shared/Container"
import UsersDataTable from "./UsersDataTable"

export default function UsersDataTableContainer() {
    const { list } = useUser()
    const { redirectTo } = useContext(DashboardThemeContext)

    return (
        <DataTableProvider getList={list}>
            <Container>
                <div className="flex flex-col gap-2 min-h-screen">
                    <div className="flex flex-wrap justify-between gap-2">
                        <button type="button" className="action-button flex items-center" 
                            onClick={() => redirectTo('users/create')}>
                            <IconPlus /> 
                            <span>Cadastrar Usuário</span>
                        </button>
                        <div className="flex flex-row gap-2">
                            <DataTableLimitSelect />
                            <DataTableSearchInput />
                        </div>
                    </div>

                    <UsersDataTable />
                </div>
            </Container>
        </DataTableProvider>
    )
}