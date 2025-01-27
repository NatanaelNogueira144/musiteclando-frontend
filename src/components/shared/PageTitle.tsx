interface PageTitleProps {
    title: string
    subtitle?: string
    icon?: React.ReactNode
}

export default function PageTitle(props: PageTitleProps) {
    return (
        <div className="relative">
            <div className="bg-black text-white">
                <div className="py-8">
                    <div className="flex z-50 gap-3 px-4">
                        {props.icon}
                        <div className="flex flex-col gap-1">
                            <h3>{props.title}</h3>
                            {props.subtitle && <p className="w-full text-base font-extralight">{props.subtitle}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}