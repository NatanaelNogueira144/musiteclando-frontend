'use client'
import DashboardTheme from "@/components/shared/theme/DashboardTheme";
import PageTitle from "@/components/shared/PageTitle";
import { IconUser } from "@tabler/icons-react";
import SubscriptionFormContainer from "@/components/subscription/SubscriptionFormContainer";
import useDashboardTheme from "@/data/hooks/useDashboardTheme";

export default function SubscriptionPage() {
    const PageContent = () => {
        const { redirectTo } = useDashboardTheme()
        return (
            <SubscriptionFormContainer 
                onReturnClick={() => redirectTo('home')}
                onSuccess={() => redirectTo('home')}
            />
        )
    }

    return (
        <DashboardTheme>
            <PageTitle 
                title="Pré-Inscrição" 
                subtitle={`Preencha os dados do formulário abaixo e clique em "Enviar". Entraremos em contato com você.`}
                icon={<IconUser size={65} className="text-blue-500" />} 
            />
            <PageContent />
        </DashboardTheme>
    )
}