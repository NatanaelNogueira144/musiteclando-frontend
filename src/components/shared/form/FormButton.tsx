'use client'
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react"

export interface FormButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    onClick: () => Promise<void>
}

export default function FormButton(props: FormButtonProps) {
    const { className, onClick, ...newProps } = props;
    const [loading, setLoading] = useState(false)

    return (
        <button {...newProps} 
            className={`action-button ${loading ? 'opacity-[0.5]' : ''} ${className}`} 
            disabled={loading} 
            onClick={async () => {
                setLoading(true)
                await onClick()
                setLoading(false)
            }}>
            {props.children}
        </button>
    )
}