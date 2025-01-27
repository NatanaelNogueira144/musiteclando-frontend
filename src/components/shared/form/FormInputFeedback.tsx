interface FormInputFeedbackProps {
    message: string|null
    positive?: boolean
}

export default function FormInputFeedback(props: FormInputFeedbackProps) {
    return props.message ? (
        <small className={`${props.positive ? 'text-green-600' : 'text-red-600'}`}>
            {props.message}
        </small>
    ) : ''
}