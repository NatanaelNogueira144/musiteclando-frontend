'use client'
import { useContext } from "react"
import DataTablePagination from "../shared/data-table/DataTablePagination"
import DataTableContext from "@/data/contexts/DataTableContext"
import DataTable from "../shared/data-table/DataTable"
import DataTableHead from "../shared/data-table/DataTableHead"
import DataTableHeader from "../shared/data-table/DataTableHeader"
import DataTableBody from "../shared/data-table/DataTableBody"
import User from "@/core/models/User"
import DataTableRow from "../shared/data-table/DataTableRow"
import DataTableCell from "../shared/data-table/DataTableCell"
import DataTableNotFound from "../shared/data-table/DataTableNotFound"
import UsersDataTableActions from "./UsersDataTableActions"
import CircularImageWithTitle from "../shared/CircularImageWithTitle"
import LoadingComponent from "../shared/LoadingComponent"

export default function UsersDataTable() {
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
                            <DataTableHeader columnName="id" sortable={true}>Nome</DataTableHeader>
                            <DataTableHeader columnName="name" sortable={true}>Artista</DataTableHeader>
                            <DataTableHeader columnName="email" sortable={true}>BPM</DataTableHeader>
                        </DataTableHead>
                        <DataTableBody>
                            {paginator?.data ? (paginator?.data as User[]).map((user: User, key: number) => (
                                <DataTableRow key={key} index={key}>
                                    <DataTableCell>
                                        <UsersDataTableActions user={user} />
                                    </DataTableCell>
                                    <DataTableCell>#{user.id}</DataTableCell>
                                    <DataTableCell>
                                        <CircularImageWithTitle 
                                            image={user.avatar_image_url ?? ''}
                                            title={user.name ?? ''}
                                        />
                                    </DataTableCell>
                                    <DataTableCell>{user.email}</DataTableCell>
                                </DataTableRow>
                            )) : (
                                <DataTableNotFound 
                                    description="Nenhum usuário foi encontrado!" 
                                    colspan={4} 
                                />
                            )}
                        </DataTableBody>
                    </DataTable>
                </div>
            ) : <LoadingComponent />}
        </div>
    )
}