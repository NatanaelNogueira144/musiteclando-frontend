import DashboardTheme from "@/components/shared/theme/DashboardTheme";
import PageTitle from "@/components/shared/PageTitle";
import UsersDataTableContainer from "@/components/users/UsersDataTableContainer";
import { IconUsers } from "@tabler/icons-react";

export default function UsersPage() {
    return (
        <DashboardTheme>
            <PageTitle 
                title="Usuários" 
                subtitle="Gerencie os usuários cadastrados" 
                icon={<IconUsers size={65} className="text-orange-500" />} 
            />
            <UsersDataTableContainer />
        </DashboardTheme>
    )
}