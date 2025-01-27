import { Paginator, PaginatorFilters } from "@/data/hooks/usePaginator"
import DataPagination from "../DataPagination"

interface DataTablePaginationProps {
    paginator: Paginator
    filters: PaginatorFilters
    setFilters: (filters: PaginatorFilters) => void
}

export default function DataTablePagination(props: DataTablePaginationProps) {
    return (
        <div>
            {props.paginator.total == 0 ? '' : (
                <p>Mostrando {props.paginator.from} à {props.paginator.to} de {props.paginator.total} resultados</p>
            )}

            {props.paginator.last_page > 1 ? (
                <DataPagination 
                    currentPage={props.filters.page} 
                    setCurrentPage={(page) => props.setFilters({...props.filters, page: page})} 
                    pages={props.paginator.last_page} 
                />
            ) : ''}
        </div>
    )
}