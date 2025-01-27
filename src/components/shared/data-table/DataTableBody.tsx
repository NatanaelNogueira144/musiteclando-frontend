import React from "react";
import DataTableNotFound from "./DataTableNotFound";
import DataTableRow from "./DataTableRow";

export default function DataTableBody({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <tbody className="border-none">
            {React.Children.toArray(children).filter(
                (element) => React.isValidElement(element) 
                    && (element.type === DataTableRow || element.type === DataTableNotFound)
            )}
        </tbody>
    )
}