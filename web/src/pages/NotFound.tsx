

export function NotFound(){
    return(

        <div>

            <div className="flex flex-col w-screen h-screen justify-center items-center ">
                <h1 className="text-gray-100 font-semibold text-2xl mb-10 ">Op's! Essa página não existe.</h1>
                <a href="/" className="font-semibold text-center text-green-100 hover:text-green-200 trasition ease-linear">Voltar para o inicio</a>
            </div>

        </div>


    )
}