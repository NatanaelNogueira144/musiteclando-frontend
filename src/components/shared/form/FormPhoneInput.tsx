import { InputMask } from "@react-input/mask"
import React from "react"
import { InputHTMLAttributes } from "react"

export interface FormPhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
    feedback?: boolean
}

export default function FormPhoneInput(props: FormPhoneInputProps) {
    const { className, feedback, ...newProps } = props;

    return (
        <InputMask 
            {...newProps}
            mask="(__) _____-____" 
            replacement={{ _: /\d/ }} 
            type="tel"
            className={`
                ${className} form-control 
                ${feedback ? 'border border-red-600' : 'border-gray-400'}
            `}
        />
    )
}