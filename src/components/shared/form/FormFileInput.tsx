'use client'
import { ChangeEvent, InputHTMLAttributes, useState } from "react"
import Image from "next/image";
import { IconFile, IconTrash, IconUpload } from "@tabler/icons-react";

export interface FormFileInputProps extends InputHTMLAttributes<HTMLInputElement> {
    initialdata?: string
    onFileChange?: (file?: File|null) => void
}

export default function FormFileInput({ accept, initialdata, onFileChange }: FormFileInputProps) {
    const [isEmpty, setIsEmpty] = useState(!!initialdata)
    const [choosenFile, setChoosenFile] = useState(null as File|null)

    return (
        <div className="flex flex-col md:flex-row items-center">
            {choosenFile || (isEmpty && initialdata) ? (
                (choosenFile && ['image/gif', 'image/jpeg', 'image/png'].includes(choosenFile.type)) 
                || (initialdata && ['jpeg', 'jpg', 'png', 'gif'].includes(initialdata.split('.').pop() ?? '')) ? (
                    <div className="flex flex-col">
                        <button type="button" className="cancel-button flex items-center flex-1" 
                            onClick={() => {
                                onFileChange?.(null)
                                setChoosenFile(null)
                                setIsEmpty(false)
                            }}>
                            <IconTrash /> 
                            <span>Remover</span>
                        </button>

                        <div className="w-[216px] h-[216px] flex flex-col justify-center items-center">
                            <Image 
                                src={choosenFile ? URL.createObjectURL(choosenFile) : (initialdata ?? '')} 
                                alt="Prévia" 
                                className="w-[216px] h-[216px] max-w-[216px] max-h-[216px]" 
                                width={216} 
                                height={216} 
                            />
                        </div>
                    </div>
                ) : (
                    <>
                        <IconFile size={72} />
                        <small className="text-center">{choosenFile ? choosenFile.name : initialdata}</small>
                    </>
                )
            ) : (
                <div className="w-64 h-64 flex flex-col justify-center items-center">
                    <small className="text-center">Nenhum Arquivo Escolhido</small>
                </div>
            )}

            <div className="flex flex-1 items-center justify-center w-full md:col-span-2 lg:col-span-3">
                <label className={`
                    flex flex-col items-center justify-center w-full h-64 border-2 
                    border-dashed rounded-lg md:rounded-s-none cursor-pointer border-gray-300 bg-gray-50 hover:bg-gray-100
                    dark:hover:bg-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500
                `}>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <IconUpload className="text-gray-500 dark:text-gray-400 mb-2" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Clique para fazer upload</span> ou arraste o arquivo.
                        </p>
                    </div>
                    <input 
                        accept={accept} 
                        type="file" 
                        className="hidden" 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            onFileChange?.(e.target.files?.[0] ?? null)
                            setChoosenFile(
                                e.target.files && Array.from(e.target.files).length != 0 ? e.target.files[0] : null
                            )
                        }} 
                    />
                </label>
            </div>
        </div>
    )
}