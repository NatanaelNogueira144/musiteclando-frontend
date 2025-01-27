'use client'
import User from "@/core/models/User"
import DashboardThemeContext from "@/data/contexts/DashboardThemeContext"
import DataTableContext from "@/data/contexts/DataTableContext"
import useMessage from "@/data/hooks/useMessage"
import useUser from "@/data/hooks/useUser"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import { useContext } from "react"

interface UsersDataTableActionsProps {
    user: User
}

export default function UsersDataTableActions(props: UsersDataTableActionsProps) {
    const { destroy } = useUser()
    const { redirectTo } = useContext(DashboardThemeContext)
    const { showSuccessMessage } = useMessage()
    const { refresh } = useContext(DataTableContext)

    return (
        <div className="flex flex-row gap-2">
            <button className="action-button" onClick={() => { redirectTo(`users/${props.user.id}`) }}>
                <IconEdit />
            </button>

            <button className="cancel-button" onClick={async () => {
                if(confirm(`Você tem certeza de que deseja excluir o usuário "${props.user.name}"?`)) {
                    await destroy(props.user.id!)
                    showSuccessMessage(`O usuário "${props.user.name}" foi excluído com sucesso!`)
                    await refresh()
                }
            }}>
                <IconTrash />
            </button>
        </div>
    )
}