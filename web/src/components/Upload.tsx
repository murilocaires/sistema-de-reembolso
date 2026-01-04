import send from "../assets/send.svg"

type Props =React.ComponentProps<"input"> & {
    filename?: string | null;
    
}

export function Upload({filename=null, ...rest}: Props){
    return(

        <div>

            <legend className="uppercase text-xxs text-gray-200 mb-2"> Comprovante  </legend>

            <div  className="w-full h-12 flex items-center rounded-lg border border-gray-300 text-sm text-gray-100 bg-transparent outline-none">
                <input type="file" className="hidden" id="upload"{...rest}/>


                <span className="text-xs text-gray-100 flex-1 pl-4">{filename ??  "Selecione o arquivo"}</span>

                <label className="flex items-center px-4 h-12 bg-green-100 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-pointer hover:bg-green-200 transition ease-linear" htmlFor="upload">
                    <img src={send} alt="icon de upload"  className="w-5 h-6"/>
                </label>
            </div>

        </div>

    )
}