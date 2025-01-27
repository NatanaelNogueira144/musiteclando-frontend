'use client'
import FormInput from "../shared/form/FormInput";
import Subscription from "@/core/models/Subscription";
import FormButton from "../shared/form/FormButton";
import { useState } from "react";
import useSubscription from "@/data/hooks/useSubscription";
import useMessage from "@/data/hooks/useMessage";
import ValidationError from "@/core/exceptions/ValidationError";
import LabeledContent from "../shared/form/LabeledContent";
import FormInputFeedback from "../shared/form/FormInputFeedback";
import IFormErrors from "@/core/interfaces/IFormErrors";
import ISubscriptionForm from "@/core/interfaces/ISubscriptionForm";
import FormPhoneInput from "../shared/form/FormPhoneInput";
import FormTextarea from "../shared/form/FormTextarea";

interface SaveSubscriptionFormProps {
    subscription?: Subscription 
    setSubscription?: (subscription: Subscription) => void
    onReturnClick: () => void
    onSuccess: (subscription: Subscription) => void
}

export default function SaveSubscriptionForm(props: SaveSubscriptionFormProps) {
    const { store, update } = useSubscription()
    const { showSuccessMessage } = useMessage()

    const [subscriptionForm, setSubscriptionForm] = useState((props.subscription ? {
        name: props.subscription.name,
        email: props.subscription.email,
        cellphone: props.subscription.cellphone,
        age: props.subscription.age,
        reason: props.subscription.reason,
    } : {}) as ISubscriptionForm)

    const [errors, setErrors] = useState({} as IFormErrors)

    return (
        <div className="flex flex-col gap-5 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <LabeledContent label="Seu Nome">
                    <FormInput 
                        feedback={!!errors?.name}
                        type="text"
                        value={subscriptionForm.name ?? ''}
                        onChange={(e) => setSubscriptionForm({...subscriptionForm, name: e.target.value})}
                        placeholder="Digite seu nome" 
                        maxLength={100}
                    />
                    <FormInputFeedback message={errors?.name ?? ''} />
                </LabeledContent>

                <LabeledContent label="Seu E-mail">
                    <FormInput 
                        feedback={!!errors?.email}
                        type="email"
                        value={subscriptionForm.email ?? ''}
                        onChange={(e) => setSubscriptionForm({...subscriptionForm, email: e.target.value})}
                        placeholder="Digite seu e-mail" 
                        maxLength={100}
                    />
                    <FormInputFeedback message={errors?.email ?? ''} />
                </LabeledContent>

                <LabeledContent label="Sua Idade">
                    <FormInput 
                        feedback={!!errors?.age}
                        type="number" 
                        value={subscriptionForm.age ?? ''} 
                        onChange={(e) => setSubscriptionForm({
                            ...subscriptionForm, 
                            age: parseInt(e.target.value)
                        })}
                        min={0}
                        placeholder="Digite sua idade"
                    />
                    <FormInputFeedback message={errors?.age ?? ''} />
                </LabeledContent>

                <LabeledContent label="Telefone Para Contato">
                    <FormPhoneInput 
                        feedback={!!errors?.cellphone}
                        value={subscriptionForm.cellphone ?? ''} 
                        onChange={(e) => setSubscriptionForm({...subscriptionForm, cellphone: e.target.value})}
                        placeholder="Telefone para Contato" 
                    />
                    <FormInputFeedback message={errors?.cellphone ?? ''} />
                </LabeledContent>

                <div className="col-span-1 md:col-span-2">
                    <LabeledContent label="Motivo da Inscrição">
                        <FormTextarea 
                            value={subscriptionForm.reason ?? ''}
                            onChange={(e) => setSubscriptionForm({...subscriptionForm, reason: e.target.value})}
                            placeholder="Descreva o que te levou a se inscrever para ter aulas de teclado..." 
                            maxLength={500}
                        />
                        <FormInputFeedback message={errors?.reason ?? ''} />
                    </LabeledContent>
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <FormButton className="action-button flex-1" onClick={async () => {
                    try {
                        setErrors({})
                        const isUpdate = !!props.subscription?.id
                        const subscription: Subscription = isUpdate 
                            ? await update(props.subscription!.id!, subscriptionForm) 
                            : await store(subscriptionForm)
                        
                        showSuccessMessage(`A inscrição de "${subscription.name}" foi ${isUpdate ? 'atualizada' : 'registrada'} com sucesso!`)
                        props.setSubscription?.(subscription)
                        props.onSuccess(subscription)
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