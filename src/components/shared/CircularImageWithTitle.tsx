import Image from "next/image"

interface CircularImageWithTitleProps {
    image: string
    title: string
    subtitle?: string
}

export default function CircularImageWithTitle(props: CircularImageWithTitleProps) {
    return (
        <div className="flex gap-2 items-center">
            <div className="flex justify-center items-center rounded-full overflow-hidden w-10 h-10">
                <Image src={props.image} width={40} height={40} alt={'Imagem'} />
            </div>
            <div className="hidden md:flex md:flex-col md:items-start">
                <span className="text-lg font-bold leading-5">{props.title}</span>
                {props.subtitle ? <span className="text-xs">{props.subtitle}</span> : ''}
            </div>
        </div>
    )
}