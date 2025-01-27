'use client'
import ResetPassword from "@/components/reset-password/ResetPassword";
import { Suspense } from "react";

export default function ResetPasswordPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ResetPassword />
        </Suspense>
    )
}