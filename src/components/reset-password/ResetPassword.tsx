'use client'
import { useSearchParams } from "next/navigation"
import ResetPasswordForm from "./ResetPasswordForm"
import ForgotPasswordForm from "./ForgotPasswordForm"

export default function ResetPassword() {
    const params = useSearchParams()
    return params.get('token') ? <ResetPasswordForm token={params.get('token') ?? ''} /> : <ForgotPasswordForm />
}