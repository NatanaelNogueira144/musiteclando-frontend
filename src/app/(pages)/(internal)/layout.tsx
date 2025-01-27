import ForceUser from "@/components/shared/ForceUser";

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <ForceUser>
            {children}
        </ForceUser>
    )
}