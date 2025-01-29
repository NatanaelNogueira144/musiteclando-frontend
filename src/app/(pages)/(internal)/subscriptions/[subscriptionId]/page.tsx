'use client'
import DashboardTheme from "@/components/shared/theme/DashboardTheme";
import LoadingComponent from "@/components/shared/LoadingComponent";
import PageTitle from "@/components/shared/PageTitle";
import SaveSubscriptionForm from "@/components/subscriptions/SaveSubscriptionForm";
import { IconPencil } from "@tabler/icons-react";
import { useContext } from "react";
import useDashboardTheme from "@/data/hooks/useDashboardTheme";
import SubscriptionPageContext, { SubscriptionPageProvider } from "@/data/contexts/SubscriptionPageContext";
import Container from "@/components/shared/Container";
import { useParams } from "next/navigation";

export default function SubscriptionEditPage() {
    const { subscriptionId } = useParams()
    
    const PageContent = () => {
        const { redirectTo } = useDashboardTheme()
        const { isLoading, subscription, setSubscription } = useContext(SubscriptionPageContext)

        return (
            <>
                <PageTitle 
                    title={`Editar Inscrição - ${subscription?.name ?? '...'}`}
                    subtitle={`Preencha os campos abaixo para editar a inscrição, e então clique em "Salvar".`}
                    icon={<IconPencil size={65} className="text-orange-500" />} 
                />
                <Container>
                    {!isLoading && subscription ? (
                        <SaveSubscriptionForm 
                            subscription={subscription} 
                            setSubscription={setSubscription} 
                            onReturnClick={() => redirectTo('subscriptions')}
                            onSuccess={() => redirectTo('subscriptions')}
                        />
                    ) : <LoadingComponent />}
                </Container>
            </>
        )
    }

    return (
        <DashboardTheme>
            {subscriptionId ? (
                <SubscriptionPageProvider subscriptionId={subscriptionId as string}>
                    <PageContent />
                </SubscriptionPageProvider>
            ) : <LoadingComponent />}
        </DashboardTheme>
    )
}