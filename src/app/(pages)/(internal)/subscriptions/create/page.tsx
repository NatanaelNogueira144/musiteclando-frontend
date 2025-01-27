'use client'
import Container from "@/components/shared/Container";
import DashboardTheme from "@/components/shared/theme/DashboardTheme";
import PageTitle from "@/components/shared/PageTitle";
import SaveSubscriptionForm from "@/components/subscriptions/SaveSubscriptionForm";
import useDashboardTheme from "@/data/hooks/useDashboardTheme";
import { IconPencil } from "@tabler/icons-react";

export default function SubscriptionCreatePage() {
    const PageContent = () => {
        const { redirectTo } = useDashboardTheme()
        return (
            <Container>
                <SaveSubscriptionForm 
                    onReturnClick={() => redirectTo('subscriptions')}
                    onSuccess={() => redirectTo('subscriptions')}
                />
            </Container>
        )
    }

    return (
        <DashboardTheme>
            <PageTitle 
                title="Registrar Inscrição" 
                subtitle={`Preencha os campos abaixo para registrar uma nova inscrição, e então clique em "Salvar".`}
                icon={<IconPencil size={65} className="text-orange-500" />} 
            />
            <PageContent />
        </DashboardTheme>
    )
}