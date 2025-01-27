import Image from "next/image";

export default function InstructorContainer() {
    return (
        <div className="flex flex-col items-center gap-5 p-16 bg-gray-200">
            <h2 className="text-center">SOBRE O INSTRUTOR</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-1">
                    <Image 
                        src="/images/instructor.jpg" 
                        width={256}
                        height={256}
                        className="w-full h-auto" 
                        alt="Imagem" 
                    />
                </div>
                <div className="sm:col-span-2">
                    <p>
                        Natanael Nogueira é músico e tecladista desde 2009, e acredita ter a experiência necessária 
                        para agregar conhecimento e valor para as pessoas que desejam iniciar ou se aperfeiçoar na 
                        música e que buscam ser relevantes nessa área. 
                    </p>
                    <br />
                    <p>
                        Além de músico e tecladista, é desenvolvedor de sites e de sistemas, e tem buscado desenvolver 
                        soluções para a área da música a fim de facilitar o aprendizado dos seus alunos.
                    </p>
                    <br />
                    <p>
                        É também o desenvolvedor do Curso Musiteclando: Teclado do Básico ao Avançado, que contém 3 
                        módulos de ensino com o objetivo de capacitar o aluno a tocar em um agrupamento musical, a 
                        ser diretor musical e a ensinar música e dar aulas de teclado para outros.
                    </p>
                </div>
            </div>
        </div>
    )
}