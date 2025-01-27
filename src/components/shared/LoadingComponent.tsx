import { Skeleton } from "../ui/skeleton";

export default function LoadingComponent() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-full rounded-xl bg-gray-700" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-gray-700" />
                <Skeleton className="h-4 w-full bg-gray-700" />
            </div>
        </div>
    )
}