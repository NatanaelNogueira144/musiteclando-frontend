'use client'
import { Suspense } from 'react'
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <LoginForm />
        </Suspense>
    )
}