import { TFeedback } from "../../types/types"
import { Box } from "./style"

type Prop={
    depoiment:TFeedback
}
export default ({depoiment}:Prop)=>{
    return <Box>
        <h3>{depoiment.nome}</h3>
        <p>'{depoiment.comentario}'</p>
    </Box>


}