import { useState } from "react"
import { TFaq } from "../../types/types"
import { Box } from "./style"
import Arrowtop from "../../svgs/arrowtop"
import Arrowbottom from "../../svgs/arrowbottom"

type Props={
    doubt:TFaq
}
export default ({doubt}:Props)=>{
    const [onBody,setOnBody]=useState(false)
    return <Box visibleBody={onBody}>
        <div className="top">
            <p>{doubt.pergunta}</p>
            <button onClick={()=>onBody ? setOnBody(false) : setOnBody(true)}>
                {onBody ? <Arrowtop /> : <Arrowbottom />}
            </button>
        </div>
        <div className="bottom">
            <p>{doubt.resposta}</p>
        </div>



    </Box>
}