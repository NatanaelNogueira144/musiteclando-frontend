import { useContext } from "react";
import Container from "../shared/Container";
import DashboardThemeContext from "@/data/contexts/DashboardThemeContext";

export default function HeroContainer() {
    const { redirectTo } = useContext(DashboardThemeContext)

    return (
        <Container>
            <div className="flex flex-col items-center gap-5 py-40 px-16">
                <h2 className="text-center">
                    Torne-se um Tecladista Completo
                </h2>
                <h4 className="text-center">
                    Música moderna, técnicas avançadas, teoria musical essencial, direção musical e partitura: 
                    reunidos em um curso completo, voltado para a sua evolução como músico e tecladista!
                </h4>
                <button className="action-button flex-1" onClick={() => redirectTo('subscription')}>
                    Quero me Inscrever
                </button>
            </div>
        </Container>
    )
}