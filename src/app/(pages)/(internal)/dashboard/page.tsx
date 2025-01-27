'use client'
import Container from "@/components/shared/Container";
import DashboardTheme from "@/components/shared/theme/DashboardTheme";
import PageTitle from "@/components/shared/PageTitle";
import { IconGraph } from "@tabler/icons-react";
import { useContext } from "react";
import UserContext from "@/data/contexts/UserContext";

export default function DashboardPage() {
    const { user } = useContext(UserContext)

    return (
        <DashboardTheme>
            <PageTitle 
                title="Painel Principal" 
                subtitle={`Seja bem-vindo, ${user?.name ?? '...'}`} 
                icon={<IconGraph size={65} className="text-orange-500" />} 
            />
            <Container>
                Em breve...
            </Container>
        </DashboardTheme>
    )
}