export default function ServicesContainer() {
    return (
        <div className="flex flex-col items-center gap-5 p-16 bg-gray-300">
            <h2 className="text-center">NOSSOS SERVIÇOS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-3 bg-cyan-600 rounded-lg text-center px-2 py-4 text-white">
                    <h3 className="text-center">AULAS PRESENCIAIS</h3>
                    <p>
                        Serei seu instrutor. Minha resposabilidade será supervisionar sua evolução como músico e 
                        tecladista, e propor atividades e exercícios de acordo com o seu nível de estudo e prática.
                    </p>
                </div>
                <div className="flex flex-col gap-3 bg-indigo-600 rounded-lg text-center px-2 py-4 text-white">
                    <h3 className="text-center">AULAS ONLINE</h3>
                    <p>
                        Aprender teclado não é só tocar: a teoria precisa andar junto com a prática. 
                        As aulas online são facilitadoras de encontros em grupo, e usarei dessa ferramenta para 
                        desenvolver aulas teóricas de música e de teclado com os alunos.
                    </p>
                </div>
            </div>
        </div>
    )
}