'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from '@/components/shared/Logo'
import useAuth from '@/data/hooks/useAuth'
import Image from 'next/image'
import FormInput from '../shared/form/FormInput'
import FormButton from '../shared/form/FormButton'
import LabeledContent from '../shared/form/LabeledContent'
import LoadingScreen from '../shared/LoadingScreen'
import useMessage from '@/data/hooks/useMessage'
import Card from '../shared/Card'
import FormInputFeedback from '../shared/form/FormInputFeedback'
import ValidationError from '@/core/exceptions/ValidationError'
import IFormErrors from '@/core/interfaces/IFormErrors'
import IAuthForm from '@/core/interfaces/IAuthForm'
import User from '@/core/models/User'

export default function LoginForm() {
    const { loading, user, login } = useAuth()
    const { showSuccessMessage } = useMessage()
    const params = useSearchParams()
    const router = useRouter()

    const [authForm, setAuthForm] = useState({} as IAuthForm)
    const [errors, setErrors] = useState({} as IFormErrors)

    useEffect(() => {
        if(user?.email) {
            const redirect = params.get('redirect') as string
            router.push(redirect ? redirect : '/dashboard')
        }
    }, [user, router, params])

    return loading ? <LoadingScreen /> : (
        <div className="flex justify-center items-center h-screen relative">
            <Image src="/images/app-background.jpg" alt="Background" className="object-cover -z-30" fill />
            <div className="
                flex flex-col justify-center items-center gap-10
                absolute top-0 left-0 w-full h-full
                bg-black/80 from-black/30 via-black/90 to-black/30
            ">
                <div className="flex flex-col w-full sm:w-1/2 md:w-2/5 lg:w-1/3 p-5 gap-5  rounded-lg">
                    <Card>
                        <div className="flex flex-col justify-center items-center relative bottom-5">
                            <div className="rounded-full bg-black/80 w-[90px] h-[90px] flex justify-center items-center absolute">
                                <Logo />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 rounded">
                            <h2>Entrar</h2>
                            <LabeledContent label="E-mail">
                                <FormInput 
                                    feedback={!!errors.email}
                                    type="email"
                                    value={authForm.email ?? ''}
                                    onChange={(e) => setAuthForm({...authForm, email: e.target.value})}
                                    placeholder="E-mail" 
                                />
                                <FormInputFeedback message={errors.email ?? ''} />
                            </LabeledContent>
                            <LabeledContent label="Senha">
                                <FormInput 
                                    feedback={!!errors.password}
                                    type="password"
                                    value={authForm.password ?? ''}
                                    onChange={(e) => setAuthForm({...authForm, password: e.target.value})}
                                    placeholder="Senha"
                                />
                                <FormInputFeedback message={errors.password ?? ''} />
                            </LabeledContent>
                            <div className="flex gap-5">
                                <FormButton className="action-button flex-1" onClick={async () => {
                                    try {
                                        const user: User = await login(authForm)
                                        showSuccessMessage(`Seja bem vindo, ${user.name}!`)
                                    } catch(error: unknown) {
                                        if(error instanceof ValidationError) setErrors(error.getErrors())
                                    }
                                }}>
                                    Entrar
                                </FormButton>
                            </div>
                            <div className="flex gap-5">
                                <button className="cancel-button flex-1" onClick={() => { router.push('/reset-password') }}>
                                    Esqueceu a Senha?
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
    
}
