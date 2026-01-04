import { Input } from "../components/Input"
import { Button } from "../components/Button"
import {z, ZodError} from  'zod'
import {api} from "../services/api"
import { AxiosError } from "axios"
import { useActionState } from "react"
import { useAuth } from "../hooks/useAuth"

const signInScheme = z.object({
    email: z.string().email({message: "Email inválido!"}),
    password: z.string().trim().min(1, {message:"Informe a senha"})
})

export function SignIn(){

    const auth = useAuth()
    const [state, formAction, isLoading] = useActionState(signIn, null)

    async function signIn(_: any, formData:FormData){
        try {
            const data = signInScheme.parse({
                email: formData.get("email"),
                password: formData.get("password"),
        })


        const response = await api.post("/sessions" , data)
        auth.save(response.data)
        } catch (error) {
            if(error instanceof ZodError){
                return {message: (error.issues[0].message)}
            }
            if (error instanceof AxiosError){
                return {message: error.response?.data.message}
            }
            
            return {message:"Não foi possível entrar"}
            
        }
        
    }


    

    return(
        <form action={formAction} className="w-full flex flex-col gap-4">
            <Input 
                name="email"
                required 
                legend="E-mail" 
                type="email" 
                placeholder="seu@email.com" 
                
            />
            <Input
                name="password" 
                required 
                legend="Senha" 
                type="password" 
                placeholder="senha" 
                
            />

            <p className="text-sm text-red-600 text-center my-4 font-medium">
                 {state?.message}
            </p>

            <Button isLoading={isLoading} type="submit">
                Entrar
            </Button>

            <a href="/signup" className="text-sm font-semibold text-gray-100 my-4 text-center hover:text-green-800 transition ease-linear">Criar conta</a>
        </form>

        

    )

}