'use client'
import Container from "@/components/shared/Container";
import DashboardTheme from "@/components/shared/theme/DashboardTheme";
import PageTitle from "@/components/shared/PageTitle";
import SaveUserForm from "@/components/users/SaveUserForm";
import useDashboardTheme from "@/data/hooks/useDashboardTheme";
import { IconUsers } from "@tabler/icons-react";

export default function UserCreatePage() {
    const PageContent = () => {
        const { redirectTo } = useDashboardTheme()
        return (
            <Container>
                <SaveUserForm 
                    onReturnClick={() => redirectTo('users')}
                    onSuccess={() => redirectTo('users')}
                />
            </Container>
        )
    }

    return (
        <DashboardTheme>
            <PageTitle 
                title="Cadastrar Usuário" 
                subtitle={`Preencha os campos abaixo para cadastrar um novo usuário, e então clique em "Salvar".`}
                icon={<IconUsers size={65} className="text-orange-500" />} 
            />
            <PageContent />
        </DashboardTheme>
    )
}