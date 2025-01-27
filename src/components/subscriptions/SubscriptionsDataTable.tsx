'use client'
import { useContext } from "react"
import DataTablePagination from "../shared/data-table/DataTablePagination"
import DataTableContext from "@/data/contexts/DataTableContext"
import DataTable from "../shared/data-table/DataTable"
import DataTableHead from "../shared/data-table/DataTableHead"
import DataTableHeader from "../shared/data-table/DataTableHeader"
import DataTableBody from "../shared/data-table/DataTableBody"
import Subscription from "@/core/models/Subscription"
import DataTableRow from "../shared/data-table/DataTableRow"
import DataTableCell from "../shared/data-table/DataTableCell"
import DataTableNotFound from "../shared/data-table/DataTableNotFound"
import SubscriptionsDataTableActions from "./SubscriptionsDataTableActions"
import LoadingComponent from "../shared/LoadingComponent"

export default function SubscriptionsDataTable() {
    const { filters, setFilters, paginator, isLoading } = useContext(DataTableContext)
    
    return (
        <div className="flex flex-col gap-4">
            {!isLoading ? (
                <div className="flex flex-col gap-4">
                    {paginator ? (
                        <DataTablePagination 
                            paginator={paginator} 
                            filters={filters} 
                            setFilters={setFilters} 
                        /> 
                    ) : ''}

                    <DataTable>
                        <DataTableHead>
                            <DataTableHeader columnName="actions">Ações</DataTableHeader>
                            <DataTableHeader columnName="name" sortable={true}>Nome</DataTableHeader>
                            <DataTableHeader columnName="email" sortable={true}>E-mail</DataTableHeader>
                            <DataTableHeader columnName="cellphone" sortable={true}>Celular</DataTableHeader>
                            <DataTableHeader columnName="age" sortable={true}>Idade</DataTableHeader>
                            <DataTableHeader columnName="reason" sortable={true}>Motivo</DataTableHeader>
                        </DataTableHead>
                        <DataTableBody>
                            {paginator?.data ? (paginator?.data as Subscription[]).map((subscription: Subscription, key: number) => (
                                <DataTableRow key={key} index={key}>
                                    <DataTableCell>
                                        <SubscriptionsDataTableActions subscription={subscription} />
                                    </DataTableCell>
                                    <DataTableCell>{subscription.name}</DataTableCell>
                                    <DataTableCell>{subscription.email}</DataTableCell>
                                    <DataTableCell>{subscription.cellphone}</DataTableCell>
                                    <DataTableCell>{subscription.age}</DataTableCell>
                                    <DataTableCell>{subscription.reason}</DataTableCell>
                                </DataTableRow>
                            )) : (
                                <DataTableNotFound 
                                    description="Nenhuma instrição foi encontrada!" 
                                    colspan={6} 
                                />
                            )}
                        </DataTableBody>
                    </DataTable>
                </div>
            ) : <LoadingComponent />}
        </div>
    )
}