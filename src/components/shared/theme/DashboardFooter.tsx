import Link from "next/link";
import Logo from "../Logo";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconBrandYoutube } from "@tabler/icons-react";

export default function DashboardFooter() {
    return (
        <footer className="flex justify-center items-center bg-gray-900 text-white">
            <div className="container flex flex-col gap-7 py-10 px-4">
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-5">
                    <Logo />
                    <div className="flex flex-col gap-1 items-center md:items-start">
                        <span className="text-2xl font-bold mb-2.5">Sobre</span>
                        <Link href="/privacy-policy">
                            <span className="text-sm hover:text-blue-400">Política de Privacidade</span>
                        </Link>
                        <Link href="/use-terms">
                            <span className="text-sm hover:text-blue-400">Termos de Uso</span>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-1 items-center md:items-start">
                        <span className="text-2xl  font-bold mb-2.5">Contato</span>
                        <Link href="mailto:natanael.nogueira144@gmail.com" target="_blank">
                            <span className="text-sm hover:text-blue-400">natanael.nogueira144@gmail.com</span>
                        </Link>

                        <Link href="https://whatsa.me/5511943416538" target="_blank">
                            <div className="flex items-center gap-1 text-sm hover:text-blue-400">
                                <IconBrandWhatsapp size={20} className="text-green-500" />
                                <span>Whatsapp</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="flex gap-2">
                        <Link href="https://youtube.com" target="_blank">
                            <IconBrandYoutube size={28} stroke={1} className="hover:text-red-600" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank">
                            <IconBrandInstagram size={28} stroke={1} className="hover:text-pink-400" />
                        </Link>
                        <Link href="https://facebook.com" target="_blank">
                            <IconBrandFacebook size={28} stroke={1} className="hover:text-blue-800" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank">
                            <IconBrandLinkedin size={28} stroke={1} className="hover:text-blue-600" />
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-1.5 text-sm">
                        <div className="flex gap-1.5">
                            <span>Desenvolvido por</span> <span className="text-blue-600">Natanael Nogueira</span>
                            <span>em {new Date().getFullYear()}</span>
                        </div>
                        <span className="hidden md:inline-block">-</span>
                        <span>Todos os direitos reservados</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}