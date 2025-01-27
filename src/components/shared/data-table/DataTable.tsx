import React from "react"
import DataTableHead from "./DataTableHead"
import DataTableBody from "./DataTableBody"

interface DataTableProps {
    children: React.ReactNode
}

export default function DataTable(props: DataTableProps) {
    return (
        <div className="data-table-wrapper">
            <table className="data-table">
                {React.Children.toArray(props.children).filter(
                    (element) => React.isValidElement(element) && element.type === DataTableHead
                )}

                {React.Children.toArray(props.children).filter(
                    (element) => React.isValidElement(element) && element.type === DataTableBody
                )}
            </table>
        </div>
    )
}