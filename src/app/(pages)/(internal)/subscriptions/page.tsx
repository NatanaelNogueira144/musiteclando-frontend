import DashboardTheme from "@/components/shared/theme/DashboardTheme";
import PageTitle from "@/components/shared/PageTitle";
import { IconPencil } from "@tabler/icons-react";
import SubscriptionsDataTableContainer from "@/components/subscriptions/SubscriptionsDataTableContainer";

export default function SubscriptionsPage() {
    return (
        <DashboardTheme>
            <PageTitle 
                title="Inscrições" 
                subtitle="Gerencie as inscrições registradas" 
                icon={<IconPencil size={65} className="text-orange-500" />} 
            />
            <SubscriptionsDataTableContainer />
        </DashboardTheme>
    )
}