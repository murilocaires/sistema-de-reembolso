import { Button } from "./Button"
import leftSVG  from "../assets/left.svg"
import rightSVG  from "../assets/right.svg"    

type Props = {
    onNext: () => void
    onPrevius: () => void
    current: number
    total: number
}

export function Pagination({onNext, onPrevius, current, total} : Props){
    return(
        
        <div className="flex gap-2 items-center justify-center ">
            <Button variant="iconSmall" onClick={onPrevius} disabled={current === 1}>
                <img src={leftSVG} alt="botão voltar"   />
            </Button>

            <span className="text-sm text-gray-200">
                {current} / {total}
            </span>
            
            <Button variant="iconSmall" onClick={onNext}  disabled={current === total}>
                <img src={rightSVG} alt="botão avançar"  />
             </Button>
            
        
           
        </div>
    )
}