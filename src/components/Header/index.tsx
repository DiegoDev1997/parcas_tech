import { useContextUI } from "../../context/contextUI"
import Close from "../../svgs/close"
import Menu from "../../svgs/menu"
import { Box } from "./style"


export default ()=>{
  const {handleStateMenuMobile,stateMenuMobile}=useContextUI()

  const closeMenuLink=()=>{
    if(stateMenuMobile){
      handleStateMenuMobile(false)
    }
  }
  return <Box visibleMobileMenu={stateMenuMobile}>
    <div className="left">
     <div className="logo">
        <div className="cx-img"><img src="/assets/svg/logo.png" alt="" /></div>
       <h2>{`< ParçasTech />`}</h2>
       <p>Sites,Sistemas Web e Apps</p>
     </div>
    </div>
    <div className="right">
      <button onClick={()=>handleStateMenuMobile(true)} className="open-mobile"><Menu /></button>
       <nav>
         <div className="links">
          <div className="close-menu">
            <button onClick={()=>handleStateMenuMobile(false)} >
               <Close />
            </button>
          </div>
          <a href="#sobre" onClick={closeMenuLink}>Sobre</a>
          <a href="#servicos" onClick={closeMenuLink}>Serviços</a>
          <a href="#depoimentos" onClick={closeMenuLink}>Feedback</a>
          <a href="#vantagens" onClick={closeMenuLink}>Vantagens para Você</a>
          <a href="#duvidas" onClick={closeMenuLink}>Duvidas Frequentes</a>
          <a href="#contato" onClick={closeMenuLink}>Entre em contato</a>
         
         </div>
        </nav> 
    </div>
    
    </Box>


}