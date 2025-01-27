'use client'
import { useContext } from "react"
import DataTableContext from "@/data/contexts/DataTableContext"
import FormSelect from "../form/FormSelect"

export default function DataTableLimitSelect() {
    const { filters, setFilters } = useContext(DataTableContext)

    return (
        <FormSelect 
            value={filters.perPage}
            onChange={(e) => setFilters({...filters, perPage: parseInt(e.target.value)})}
        >
            <option value={10}>10 Linhas</option>
            <option value={20}>25 Linhas</option>
            <option value={50}>50 Linhas</option>
        </FormSelect>
    )
}