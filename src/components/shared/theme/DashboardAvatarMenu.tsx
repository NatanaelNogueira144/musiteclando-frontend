'use client'
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import User from "@/core/models/User"
import useAuth from "@/data/hooks/useAuth"
import useDashboardTheme from "@/data/hooks/useDashboardTheme"
import CircularImageWithTitle from "../CircularImageWithTitle"

interface DashboardAvatarMenuProps {
    user: User
}

export default function DashboardAvatarMenu(props: DashboardAvatarMenuProps) {
    const { logout } = useAuth()
    const { redirectTo } = useDashboardTheme()

    return props.user ? (
        <div className="flex gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <CircularImageWithTitle 
                        image={props.user.avatar_image_url ?? ''}
                        title={props.user.name ?? ''}
                        subtitle={props.user.user_type_name}
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer" onClick={() => redirectTo('home')}>
                        Página Principal
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={() => redirectTo('dashboard')}>
                        Painel do Aluno
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {props.user.is_admin && (
                        <>
                            <DropdownMenuItem className="cursor-pointer" onClick={() => redirectTo('users')}>
                                Lista de Usuários
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer" onClick={() => redirectTo('subscriptions')}>
                                Lista de Inscrições
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                        </>
                    )}
                    <DropdownMenuItem className="cursor-pointer" onClick={() => redirectTo('edit-profile')}>
                        Editar Perfil
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer" onClick={logout}>
                        Sair
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    ) : null
}