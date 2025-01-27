import { Skeleton } from "../ui/skeleton";
import Logo from "./Logo";

export default function LoadingScreen() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center min-h-screen bg-gray-800">
            <Logo />
            <span className="text-white">Carregando...</span>
            <Skeleton className="h-4 w-20 bg-gray-700" />
        </div>
    )
}