import DashboardTheme from "@/components/shared/theme/DashboardTheme";
import PageTitle from "@/components/shared/PageTitle";
import UseTermsSection from "@/components/use-terms/UseTermsSection";
import { IconUser } from "@tabler/icons-react";
import Container from "@/components/shared/Container";

export default function UseTermsPage() {
    return (
        <DashboardTheme>
            <PageTitle 
                title="Termos de Uso" 
                subtitle="Segue abaixo os nossos termos de uso." 
                icon={<IconUser size={65} className="text-blue-500" />} 
            />
            <Container>
                <UseTermsSection />
            </Container>
        </DashboardTheme>
    )
}