import { InputHTMLAttributes } from "react"

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    feedback?: boolean
}

export default function FormInput(props: FormInputProps) {
    const { className, feedback, ...newProps } = props;
    return (
        <input {...newProps} className={`
            ${className} form-control 
            ${feedback ? 'border border-red-600' : 'border-gray-400'}
        `} />
    )
}