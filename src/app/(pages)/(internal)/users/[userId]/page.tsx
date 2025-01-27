'use client'
import DashboardTheme from "@/components/shared/theme/DashboardTheme";
import LoadingComponent from "@/components/shared/LoadingComponent";
import PageTitle from "@/components/shared/PageTitle";
import SaveUserForm from "@/components/users/SaveUserForm";
import { IconUsers } from "@tabler/icons-react";
import { useContext } from "react";
import useDashboardTheme from "@/data/hooks/useDashboardTheme";
import UserPageContext, { UserPageProvider } from "@/data/contexts/UserPageContext";
import Container from "@/components/shared/Container";

type Props = {
    params: Promise<{ userId: string }>
}

export default function UserEditPage({ params }: Props) {
    const PageContent = () => {
        const { redirectTo } = useDashboardTheme()
        const { isLoading, user, setUser } = useContext(UserPageContext)

        return (
            <>
                <PageTitle 
                    title={`Editar Usuário - ${user?.name ?? '...'}`}
                    subtitle={`Preencha os campos abaixo para editar o usuário, e então clique em "Salvar".`}
                    icon={<IconUsers size={65} className="text-orange-500" />} 
                />
                <Container>
                    {!isLoading && user ? (
                        <SaveUserForm 
                            user={user} 
                            isUpdate={true}
                            setUser={setUser} 
                            onReturnClick={() => redirectTo('users')}
                            onSuccess={() => redirectTo('users')}
                        />
                    ) : <LoadingComponent />}
                </Container>
            </>
        )
    }

    return (
        <DashboardTheme>
            <UserPageProvider params={params}>
                <PageContent />
            </UserPageProvider>
        </DashboardTheme>
    )
}