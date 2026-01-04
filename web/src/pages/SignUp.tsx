import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useState } from "react"
import { z, ZodError } from "zod"
import { api } from "../services/api"
import { useNavigate } from "react-router"
import { AxiosError } from "axios"



export function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password,  setPassword] = useState("")
    const [passwordConfirm,  setPasswordConfirm] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const signUpSchema = z.object({
        name: z.string().trim().min(1, {message: "Nome é obrigatório"}),
        email: z.string().email({message: "E-mail inválido"}),
        password: z.string().min(6, {message: "A senha deve ter pelo menos 6 digitos"}),
        passwordConfirm: z.string({ message: "Confirme a senha"})

    }).refine((data) => data.password === data.passwordConfirm, {
        message: "As senhas não conferem",
        path: ["passwordConfirm"]
    })


    async function onSubmit(e : React.FormEvent){
        e.preventDefault()


        try{
            setLoading(true)

           const data = signUpSchema.parse({
                name,
                email,
                password,
                passwordConfirm
            })

            await api.post("/users", data)
            if(confirm("Cadastrado com sucesso! Ir para a tela de entrar ?")){
                navigate("/")
            }
           
        } catch(error){
            console.log(error)
            if(error instanceof ZodError){
                return alert(error.issues[0].message)
            }

            if(error instanceof AxiosError){
                return alert(error.response?.data.message)
            }
            alert("Não foi possível cadastrar!")
        }
        finally{
            setLoading(false)
        }
    }

    

    

    return(
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
            <Input required legend="Nome" type="text" placeholder="digite seu nome" onChange={(e) => setName(e.target.value)}/>
            <Input required legend="E-mail" type="email" placeholder="seu@email.com" onChange={(e) => setEmail(e.target.value)}/>
            
            <Input required legend="Senha" type="password" placeholder="123456" onChange={(e) => setPassword(e.target.value)}/>
            <Input required legend="Confirmar senha" type="password" placeholder="123456" onChange={(e) => setPasswordConfirm(e.target.value)}/>
            <Button isLoading={loading} type="submit">
                Cadastrar
            </Button>

            <a href="/" className="text-sm font-semibold text-gray-100 my-4 text-center hover:text-green-800 transition ease-linear">Já tenho uma conta</a>
        </form>

        

    )

}