import { SelectHTMLAttributes } from "react"

export interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    feedback?: boolean
}

export default function FormSelect(props: FormSelectProps) {
    const { className, feedback, children, ...newProps } = props;
    return (
        <select {...newProps} className={`
            ${className} form-control 
            ${feedback ? 'border border-red-600' : 'border-gray-400'}
        `}>
            {children}
        </select>
    )
}