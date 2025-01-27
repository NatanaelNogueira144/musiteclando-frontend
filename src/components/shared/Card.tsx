export interface CardProps {
    children: React.ReactNode
}

export default function Card(props: CardProps) {
    return (
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-950/95 text-white rounded-lg p-5 w-full">
            {props.children}
        </div>
    )
}