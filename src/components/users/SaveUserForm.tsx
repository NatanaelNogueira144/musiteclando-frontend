'use client'
import FormInput from "../shared/form/FormInput";
import User from "@/core/models/User";
import FormSelect from "../shared/form/FormSelect";
import FormButton from "../shared/form/FormButton";
import { useState } from "react";
import useUser from "@/data/hooks/useUser";
import useMessage from "@/data/hooks/useMessage";
import ValidationError from "@/core/exceptions/ValidationError";
import LabeledContent from "../shared/form/LabeledContent";
import FormInputFeedback from "../shared/form/FormInputFeedback";
import IFormErrors from "@/core/interfaces/IFormErrors";
import IUserForm from "@/core/interfaces/IUserForm";

interface SaveUserFormProps {
    user?: User 
    setUser?: (user: User) => void
    isUpdate?: boolean
    onReturnClick: () => void
    onSuccess: (user: User) => void
}

export default function SaveUserForm(props: SaveUserFormProps) {
    const { store, update } = useUser()
    const { showSuccessMessage } = useMessage()

    const [userForm, setUserForm] = useState((props.user ? {
        name: props.user.name,
        email: props.user.email,
        password: props.user.password,
        user_type: props.user.user_type,
    } : {}) as IUserForm)

    const [errors, setErrors] = useState({} as IFormErrors)

    return (
        <div className="flex flex-col gap-5 min-h-screen">
            <div className="grid grid-cols-2 gap-3">
                <LabeledContent label="Nome do Usuário">
                    <FormInput 
                        feedback={!!errors?.name}
                        type="text"
                        value={userForm.name ?? ''}
                        onChange={(e) => setUserForm({...userForm, name: e.target.value})}
                        placeholder="Nome do Usuário" 
                        maxLength={100}
                    />
                    <FormInputFeedback message={errors?.name ?? ''} />
                </LabeledContent>
                <LabeledContent label="E-mail do Usuário">
                    <FormInput 
                        feedback={!!errors?.email}
                        type="email"
                        value={userForm.email ?? ''}
                        onChange={(e) => setUserForm({...userForm, email: e.target.value})}
                        placeholder="E-mail do Usuário" 
                        maxLength={100}
                    />
                    <FormInputFeedback message={errors?.email ?? ''} />
                </LabeledContent>

                {!props.isUpdate && (
                    <LabeledContent label="Senha do Usuário">
                        <FormInput 
                            feedback={!!errors?.password}
                            type="password"
                            value={userForm.password ?? ''}
                            onChange={(e) => setUserForm({...userForm, password: e.target.value})}
                            placeholder="Senha do Usuário" 
                        />
                        <FormInputFeedback message={errors?.password ?? ''} />
                    </LabeledContent>
                )}
                
                <LabeledContent label="Nível do Usuário">
                    <FormSelect 
                        feedback={!!errors?.user_type}
                        value={userForm.user_type ?? ''}
                        onChange={(e) => setUserForm({...userForm, user_type: parseInt(e.target.value)})} 
                    >
                        <option value={0}>Selecionar...</option>
                        <option value={1}>Administrador</option>
                        <option value={2}>Padrão</option>
                    </FormSelect>
                    <FormInputFeedback message={errors?.user_type ?? ''} />
                </LabeledContent>
            </div>
            <div className="flex flex-row gap-4">
                <FormButton className="action-button flex-1" onClick={async () => {
                    try {
                        setErrors({})
                        const isUpdate = !!props.user?.id
                        const user: User = isUpdate ? await update(props.user!.id!, userForm) : await store(userForm)

                        showSuccessMessage(`O usuário "${user.name}" foi ${isUpdate ? 'atualizado' : 'cadastrado'} com sucesso!`)
                        props.setUser?.(user)
                        props.onSuccess(user)
                    } catch(error: unknown) {
                        if(error instanceof ValidationError) setErrors(error.getErrors())
                    }
                }}>
                    Salvar
                </FormButton>
                <button className="cancel-button flex-1" onClick={() => props.onReturnClick()}>Voltar</button>
            </div>
        </div>
    )
}