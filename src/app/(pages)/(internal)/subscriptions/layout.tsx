import ForceAdmin from "@/components/shared/ForceAdmin";

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <ForceAdmin>
            {children}
        </ForceAdmin>
    )
}