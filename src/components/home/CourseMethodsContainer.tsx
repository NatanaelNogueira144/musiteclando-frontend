export default function CourseMethodsContainer() {
    return (
        <div className="flex flex-col items-center gap-5 p-16 bg-gray-200">
            <h2 className="text-center">MÓDULOS DO CURSO MUSITECLANDO</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex flex-col gap-3 bg-green-600 rounded-lg text-center px-2 py-4 text-white">
                    <h3 className="text-center">MÓDULO 1</h3>
                    <h4 className="text-center">Introdução Musical no Teclado</h4>
                    <p>
                        Este é o módulo introdutório, pelo qual você terá noções básicas de som e de música, além de 
                        iniciar sua jornada como tecladista. A conclusão deste módulo te habilita a tocar em grupo 
                        com outros músicos.
                    </p>
                </div>
                <div className="flex flex-col gap-3 bg-red-600 rounded-lg text-center px-2 py-4 text-white">
                    <h3 className="text-center">MÓDULO 2</h3>
                    <h4 className="text-center">Teoria Elementar Essencial</h4>
                    <p>
                        Após aprender o básico, é hora de aperfeiçoar, e o segundo módulo trata exatamente disto. 
                        Além de aprender através da partitura, você estará habilitado a atuar com direção musical 
                        de um grupo musical.
                    </p>
                </div>
                <div className="flex flex-col gap-3 bg-gray-600 rounded-lg text-center px-2 py-4 text-white">
                    <h3 className="text-center">MÓDULO 3</h3>
                    <h4 className="text-center">Técnicas Avançadas no Teclado</h4>
                    <p>
                        Esta é a cereja do bolo do curso, que te tornará um tecladista diferenciado no meio musical. 
                        Este terceiro módulo é composto de minha experiência como tecladista, e te ensinarei técnicas 
                        avançadas de teclado e piano para você dominar este instrumento por completo.
                    </p>
                </div>
            </div>
        </div>
    )
}