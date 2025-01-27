'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image"
import Logo from "../shared/Logo";
import useResetPassword from "@/data/hooks/useResetPassword";
import FormInput from "../shared/form/FormInput";
import ValidationError from "@/core/exceptions/ValidationError";
import FormButton from "../shared/form/FormButton";
import LabeledContent from "../shared/form/LabeledContent";
import FormInputFeedback from "../shared/form/FormInputFeedback";
import useMessage from "@/data/hooks/useMessage";
import IFormErrors from "@/core/interfaces/IFormErrors";

export default function ForgotPasswordForm() {
    const { sendEmail } = useResetPassword()
    const { showSuccessMessage } = useMessage()
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState({} as IFormErrors)

    return (
        <div className="flex justify-center items-center h-screen relative">
            <Image src="/images/app-background.jpg" fill alt="Background" className="object-cover -z-30" priority />
            <div className="
                flex flex-col justify-center items-center gap-10
                absolute top-0 left-0 w-full h-full
                bg-black/80 from-black/30 via-black/90 to-black/30
            ">
                <div className="flex flex-col w-full sm:w-1/2 md:w-2/5 lg:w-1/3 p-5 gap-5 bg-white/50 rounded-lg">
                    <div className="flex flex-col justify-center items-center relative bottom-5">
                        <div className="rounded-full bg-black/80 w-[90px] h-[90px] flex justify-center items-center absolute">
                            <Logo />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded">
                        <h2>Redefinir Senha</h2>
                        <LabeledContent label="Seu E-mail">
                            <FormInput
                                feedback={!!errors.email}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Seu E-mail"
                                maxLength={100}
                            />
                            <FormInputFeedback message={errors.email ?? ''} />
                        </LabeledContent>
                        <FormButton className="action-button flex-1" onClick={async () => {
                            try {
                                setErrors({})
                                await sendEmail(email) 
                                showSuccessMessage('Uma mensagem foi enviada para o email %s. Verifique para redefinir a senha.')
                            } catch(error: unknown) {
                                if(error instanceof ValidationError) setErrors(error.getErrors())
                            }
                        }}>
                            Enviar Solicitação
                        </FormButton>
                        <button onClick={() => { router.push('/') }} className="cancel-button flex-1">
                            Voltar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}