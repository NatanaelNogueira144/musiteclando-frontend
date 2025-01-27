export interface ContainerProps {
    children: React.ReactNode
}

export default function Container(props: ContainerProps) {
    return (
        <div className="relative">
            <div className="bg-transparent bg-gradient-to-r from-gray-800/60 via-gray-900/90 to-gray-800/80 text-white">
                <div className="py-8 sm:px-5">{props.children}</div>
            </div>
        </div>
    )
}