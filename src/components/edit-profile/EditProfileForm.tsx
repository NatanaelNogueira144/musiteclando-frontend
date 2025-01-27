'use client'
import { useEffect, useState } from "react";
import FormInput from "../shared/form/FormInput";
import ValidationError from "@/core/exceptions/ValidationError";
import useAuth from "@/data/hooks/useAuth";
import FormButton from "../shared/form/FormButton";
import LabeledContent from "../shared/form/LabeledContent";
import FormInputFeedback from "../shared/form/FormInputFeedback";
import useMessage from "@/data/hooks/useMessage";

interface FormErrors {
    name?: string
    email?: string
    password?: string
}

export default function EditProfileForm() {
    const { showSuccessMessage } = useMessage()
    const { user, edit } = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({} as FormErrors)

    useEffect(() => {
        setName(user?.name ?? '')
        setEmail(user?.email ?? '')
    }, [user?.name, user?.email])

    return (
        <div className="flex flex-col gap-5 min-h-screen">
            <div className="grid grid-cols-2 gap-4 rounded">
                <LabeledContent label="Seu Nome">
                    <FormInput 
                        feedback={!!errors.name}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={100}
                        placeholder="Seu Nome" 
                    />
                    <FormInputFeedback message={errors.name ?? ''} />
                </LabeledContent>
                <LabeledContent label="Seu E-mail">
                    <FormInput 
                        feedback={!!errors.email}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        maxLength={100}
                        placeholder="Seu E-mail" 
                    />
                    <FormInputFeedback message={errors.email ?? ''} />
                </LabeledContent>
                <LabeledContent label="Sua Senha">
                    <FormInput 
                        feedback={!!errors.password}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Sua Senha"
                    />
                    <FormInputFeedback message={errors.password ?? ''} />
                </LabeledContent>
            </div>
            
            <FormButton onClick={async () => {
                try {
                    setErrors({})
                    await edit(name, email, password) 
                    showSuccessMessage('Seus dados foram atualizados com sucesso!')
                } catch(error: unknown) {
                    if(error instanceof ValidationError) setErrors(error.getErrors())
                }
            }}>
                Salvar
            </FormButton>
        </div>
    )
}