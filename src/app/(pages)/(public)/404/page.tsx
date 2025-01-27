'use client'
import Container from "@/components/shared/Container";
import DashboardTheme from "@/components/shared/theme/DashboardTheme";
import useDashboardTheme from "@/data/hooks/useDashboardTheme";

export default function NotFoundPage() {
    const PageContent = () => {
        const { redirectTo } = useDashboardTheme()
        return (
            <Container>
                <div className="flex gap-4 flex-col">
                    <h2 className="text-center">404</h2>
                    <p className="text-center">Lamentamos, mas o que você procurava não foi encontrado!</p>
                    <div className="flex justify-center">
                        <button className="cancel-button" onClick={() => redirectTo('home')}>
                            Voltar ao Início
                        </button>
                    </div>
                </div>
            </Container>
        )
    }

    return (
        <DashboardTheme>
            <PageContent />
        </DashboardTheme>
    )
}