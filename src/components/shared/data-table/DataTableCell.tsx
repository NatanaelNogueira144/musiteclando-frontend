interface DataTableCellProps {
    children?: React.ReactNode
}

export default function DataTableCell(props: DataTableCellProps) {
    return (
        <td className="p-4">
            {props.children}
        </td>
    )
}