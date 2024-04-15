import Insta from "../../svgs/insta"
import ArrowIcon from  "../../svgs/arrow" 
import ZapIcon from "../../svgs/zap2"
import { Container } from "./style"

export default ()=>{
    return <Container>
       <div id="contato" className="content">
        <div className="about">
            <h3><ArrowIcon />  Sobre Nós</h3>
                <p>Somos uma empressa onde transformamos ideias inovadoras em realidade digital! Somos uma equipe apaixonada e dedicada, especializada na criação de sites e aplicativos personalizados que elevam a 
                    presença online e impulsionam o sucesso dos nossos clientes.
                </p>
                <p>
                  Nossa abordagem única combina criatividade, expertise técnica e atenção aos detalhes para oferecer soluções digitais sob medida. Desde o design intuitivo até a funcionalidade avançada, 
                  cada projeto é tratado com o mais alto padrão de qualidade, refletindo a visão única de cada cliente.
                </p>
            </div>
            <div className="links">
                <h3><ArrowIcon /> Entre em contato com a gente </h3>
                <a href="https://www.instagram.com/dmtech__solutions" target="_blank">
                  <Insta />
                    <span>Nos Siga no  Insta</span>
                </a>
                <a href="https://shre.ink/8jdp" target="_blank">
                    <ZapIcon />
                    <span>Chame  no Whatssap</span>
                </a>
                <a href="">
                        <span>Ligue pra gente</span>
                </a>
            </div>  
        </div>   
        <div className="divider"> </div>
        <div className="line">
            <p>Desenvolvido de ❤️ para você</p>
            <p>São Paulo - SP</p>
            <p>Todos os direitos reservados</p>
        </div>
    </Container>
}