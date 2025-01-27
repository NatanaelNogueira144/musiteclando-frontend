import PrivacyPolicySection from "@/components/privacy-policy/PrivacyPolicySection";
import DashboardTheme from "@/components/shared/theme/DashboardTheme";
import PageTitle from "@/components/shared/PageTitle";
import { IconList } from "@tabler/icons-react";
import Container from "@/components/shared/Container";

export default function PrivacyPolicyPage() {
    return (
        <DashboardTheme>
            <PageTitle 
                title="Política de Privacidade" 
                subtitle="Segue abaixo a nossa política de privacidade." 
                icon={<IconList size={65} className="text-blue-500" />} 
            />
            <Container>
                <PrivacyPolicySection />
            </Container>
        </DashboardTheme>
    )
}