import { InputHTMLAttributes } from "react"

export interface FormCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    feedback?: boolean
}

export default function FormCheckbox(props: FormCheckboxProps) {
    const { className, feedback, ...newProps } = props;
    return (
        <input {...newProps} type="checkbox" className={`
            ${className} w-4 h-4 ${feedback ? 'border border-red-600' : 'border-gray-400'}
        `} />
    )
}