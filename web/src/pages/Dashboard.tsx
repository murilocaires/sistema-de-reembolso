
import { useState } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { RefoundItem, type RefundItemProps } from "../components/RefundItem"
import { Pagination } from "../components/Pagination"
import SearchSvg from "../assets/search.svg"
import { CATEGORIES } from "../utils/categories"
import { formatCurrency } from "../utils/formatCurrency"
import { AxiosError } from "axios"
import {api} from "../services/api"
import { useEffect } from "react"




const PER_PAGE = 3;

export function Dashboard(){
    const [name, setName] = useState("")
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [refunds, setRefunds] = useState<RefundItemProps[]>([])


    function handlePagination(action: "previus" | "next"){
        setPage((prevPage) => {
            if(action === "previus" && prevPage > 1){
                return prevPage - 1
            }
            if(action === "next" && prevPage < totalPage){
                return prevPage + 1
            }
            return prevPage
        })
    }


    async function fetchRefounds(){
        try {
            const response = await api.get<RefundsPaginationAPIResponse>(`/refunds?name=${name.trim()}&page=${page}&perPage=${PER_PAGE} `
        )
            
        setRefunds(
            response.data.refunds.map((refund) => ({
                    id: refund.id,
                    name: refund.user.name,
                    description: refund.name,
                    amount: formatCurrency(refund.amount),
                    categoryImg: CATEGORIES[refund.category].icon,
            })) 
        )

         setTotalPage(response.data.pagination.totalPages)

            
        } catch (error) {
            if(error instanceof AxiosError){
            return alert(error.response?.data.message)
            }
            alert("Não foi possível carregar")
        }
    }

    function onSubmit(e: React.FormEvent){
        e.preventDefault()
        fetchRefounds()
    }

    useEffect(()=>{
        fetchRefounds()
    },[page])


    return(
        <div className="bg-gray-500 rounded-xl p-10  md:min-w-[768px]"> 
            <h1 className="text-xl font-bold text-gray-100 "> Solicitações </h1>
            
            <form 
                onSubmit={onSubmit}
                className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6">

                <Input onChange={(e)=>setName(e.target.value)} placeholder="Pesquisar pelo nome"/>

                <Button variant="icon" type="submit" className="w-h">
                    <img src={SearchSvg} alt="Icone de pesquisar" />
                </Button>
            </form> 

            <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
                {
                    refunds.map((item)=>(
                        <RefoundItem key={item.id} data={item}  href={`/refund/${item.id}`}/>
                    ))
                }
               
              
            </div>

            <Pagination

                current = {page}
                total={totalPage}
                onNext={() => handlePagination("next")}
                onPrevius={() => handlePagination("previus")}
                
            />
                 
        </div> 
    )
}


