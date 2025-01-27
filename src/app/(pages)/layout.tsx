import { UserProvider } from "@/data/contexts/UserContext"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <UserProvider>
            {children}
            <ToastContainer />
        </UserProvider>
    )
}
