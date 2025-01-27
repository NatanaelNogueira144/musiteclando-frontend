'use client'
import DataTableContext from "@/data/contexts/DataTableContext"
import { IconArrowBadgeDown, IconArrowBadgeUp } from "@tabler/icons-react"
import { useContext } from "react"

interface DataTableHeaderProps {
    columnName: string
    children?: React.ReactNode
    sortable?: boolean
}

export default function DataTableHeader(props: DataTableHeaderProps) {
    const { filters, setFilters } = useContext(DataTableContext)

    return (
        <th className="data-table-header">
            {props.sortable ? (
                <div className="flex flex-row justify-between">
                    <div>{props.children}</div>
                    <div className="flex flex-col gap-1">
                        <IconArrowBadgeUp 
                            size={10} 
                            className={`
                                cursor-pointer 
                                ${filters.orderBy === props.columnName && !filters.isDescendant 
                                    ? 'text-white' 
                                    : 'text-gray-400'
                                }
                            `}
                            onClick={() => setFilters({
                                ...filters, 
                                orderBy: props.columnName, 
                                isDescendant: false
                            })} 
                        />
                        <IconArrowBadgeDown 
                            size={10} 
                            className={`
                                cursor-pointer 
                                ${filters.orderBy === props.columnName && filters.isDescendant 
                                    ? 'text-white' 
                                    : 'text-gray-400'
                                }
                            `}
                            onClick={() => setFilters({
                                ...filters, 
                                orderBy: props.columnName, 
                                isDescendant: true
                            })} 
                        />
                    </div>
                </div>
            ) : props.children}
        </th>
    )
}