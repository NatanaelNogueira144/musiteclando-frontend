interface DataTableNotFoundProps {
    description: string
    colspan: number
}

export default function DataTableNotFound(props: DataTableNotFoundProps) {
    return (
        <tr>
            <td className="data-table-not-found" colSpan={props.colspan}>
                {props.description}
            </td>
        </tr>
    )
}