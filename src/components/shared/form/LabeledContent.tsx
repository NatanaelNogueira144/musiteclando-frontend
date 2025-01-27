import { HTMLAttributes } from "react"

interface LabeledContentProps extends HTMLAttributes<HTMLDivElement> {
    label: string
}

export default function LabeledContent(props: LabeledContentProps) {
    return (
        <div className={`${props.className} flex flex-col gap-1`}>
            <label>{props.label}</label>
            {props.children}
        </div>
    )
}