'use client'
import Subscription from "@/core/models/Subscription"
import DashboardThemeContext from "@/data/contexts/DashboardThemeContext"
import DataTableContext from "@/data/contexts/DataTableContext"
import useMessage from "@/data/hooks/useMessage"
import useSubscription from "@/data/hooks/useSubscription"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import { useContext } from "react"

interface SubscriptionsDataTableActionsProps {
    subscription: Subscription
}

export default function SubscriptionsDataTableActions(props: SubscriptionsDataTableActionsProps) {
    const { destroy } = useSubscription()
    const { redirectTo } = useContext(DashboardThemeContext)
    const { showSuccessMessage } = useMessage()
    const { refresh } = useContext(DataTableContext)

    return (
        <div className="flex flex-row gap-2">
            <button className="action-button" onClick={() => { redirectTo(`subscriptions/${props.subscription.id}`) }}>
                <IconEdit />
            </button>

            <button className="cancel-button" onClick={async () => {
                if(confirm(`Você tem certeza de que deseja excluir a inscrição "${props.subscription.name}"?`)) {
                    await destroy(props.subscription.id!)
                    showSuccessMessage(`A inscrição "${props.subscription.name}" foi excluída com sucesso!`)
                    await refresh()
                }
            }}>
                <IconTrash />
            </button>
        </div>
    )
}