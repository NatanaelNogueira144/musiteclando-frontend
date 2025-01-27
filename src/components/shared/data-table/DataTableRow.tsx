import React from "react"
import DataTableCell from "./DataTableCell"

interface DataTableRowProps {
    children?: React.ReactNode
    index: number
}

export default function DataTableRow(props: DataTableRowProps) {
    return (
        <tr className={`${props.index % 2 == 1 ? 'data-table-clearer-row' : 'data-table-darker-row'}`}>
            {React.Children.toArray(props.children).filter(
                (element) => React.isValidElement(element) && element.type === DataTableCell
            )}
        </tr>
    )
}