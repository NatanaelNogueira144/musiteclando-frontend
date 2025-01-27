'use client'
import EditProfileForm from "@/components/edit-profile/EditProfileForm";
import Container from "@/components/shared/Container";
import DashboardTheme from "@/components/shared/theme/DashboardTheme";
import PageTitle from "@/components/shared/PageTitle";
import { IconEdit } from "@tabler/icons-react";

export default function EditProfilePage() {
    return (
        <DashboardTheme>
            <PageTitle 
                title="Editar Perfil" 
                subtitle="Preencha os campos do formulário abaixo para alterar suas informações." 
                icon={<IconEdit size={65} className="text-orange-500" />} 
            />
            <Container>
                <EditProfileForm />
            </Container>
        </DashboardTheme>
    )
}