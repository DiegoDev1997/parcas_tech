import Apps from "../../svgs/Apps"
import ArrowRight from "../../svgs/arrowright"
import Webloja from "../../svgs/webloja"
import Website from "../../svgs/website"
import { TService } from "../../types/types"
import { Box } from "./style"

type Props={
    service:TService
}


export default ({service}:Props)=>{
    return <Box>
        <div className="title-icon">
            {service.type === 'sites' && <Website />}
            {service.type === 'lojas' && <Webloja />}
            {service.type === 'apps' && <Apps />}
            <h3>{service.nome}</h3>
        </div>
        <div className="details">
            {service.detalhes.map((s,k)=><li key={k}><ArrowRight />{s}</li>)}
        </div>
        <div className="cx-btn">
           {service.type === 'sites' && <a href=''>Quero ter o meu  site </a>}
           {service.type === 'lojas' &&  <a href=''>Quero ter a minha  loja virtual </a>}
           {service.type === 'apps' && <a href=''>Quero ter o meu Aplicativo </a>}
          
        </div>
    </Box>
}