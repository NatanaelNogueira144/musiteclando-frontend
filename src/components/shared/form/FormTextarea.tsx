import { TextareaHTMLAttributes } from "react"

export interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    feedback?: boolean
}

export default function FormTextarea(props: FormTextareaProps) {
    const { className, feedback, ...newProps } = props;
    return (
        <textarea {...newProps} className={`
            ${className} form-control 
            ${feedback ? 'border border-red-600' : 'border-gray-400'}
        `} />
    )
}