import logo from "../assets/logo.svg"
import signout from "../assets/signout.svg"
import { useAuth } from "../hooks/useAuth"


export function Header(){
    const auth = useAuth()

    return(

        <header className="flex justify-between w-full my-8">
            <img src={logo} alt="LOGO" className=""/>
            <div className="flex  items-center gap-3
            ">
                <span>Olá, {auth.session?.user.name} </span>
                <img src={signout} alt="BOTÃO SAIR"  className="cursor-pointer hover:opacity-75 transition ease-linear" onClick={auth.remove}/>
            </div>
        </header>

    )
}