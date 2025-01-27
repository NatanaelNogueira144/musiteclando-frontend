'use client'
import { useContext } from "react"
import DataTableContext from "@/data/contexts/DataTableContext"
import FormInput from "../form/FormInput"

export default function DataTableSearchInput() {
    const { filters, setFilters } = useContext(DataTableContext)
    return (
        <FormInput 
            type="search"
            value={filters.search}
            onChange={(e) => setFilters({...filters, search: e.target.value})}
            placeholder="Buscar por..."
        />
    )
}