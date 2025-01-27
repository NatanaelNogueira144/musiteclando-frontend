import React from "react"
import DataTableHeader from "./DataTableHeader"

export default function DataTableHead({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <thead className="data-table-head">
            <tr className="border-none">
                {React.Children.toArray(children).filter(
                    (element) => React.isValidElement(element) && element.type === DataTableHeader
                )}
            </tr>
        </thead>
    )
}