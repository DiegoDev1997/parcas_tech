import {ContainerFive, ContainerFour, ContainerOne, ContainerTrue, ContainerTwo, Main } from "./styles/app.style"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { FeedbackClientes } from "./utils/feebacks"
import CardDepoiment from "./components/CardDepoiment"
import CardService from "./components/CardService"
import { Service } from "./utils/services"
import { Faqs } from "./utils/faq"
import CardDoubt from "./components/CardDoubt"
import Ok from "./svgs/ok"
import { useEffect} from "react"
import gsap from "gsap"
import ScrollToTopButton from "./components/ScrollTopBottom"


function App() {

  useEffect(() => {
    const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
    tl.to('.parallax-element', {y: '-20%', duration: 1});
  }, [])

  
  return (
    <div >
     <Header />
      <Main className="parallax-container" >
        <div className="content-main">
          <ContainerOne id="sobre">
           <div className="content-about">
            <div className="left">
                <h2>Precisa de um Site ou App?</h2>
                <p>Transforme sua presença online com a expertise da nossa agência web. 
                  Desenvolvemos soluções digitais sob medida para impulsionar seu negócio para o sucesso!
                  Do design de sites responsivos ao desenvolvimento de aplicativos personalizados, oferecemos uma ampla gama de serviços para atender às suas necessidades digitais. 
                  Explore nossas soluções especializadas e leve sua presença online para o próximo nível.
                </p>
                <p>
                  Explore o potencial ilimitado da sua marca online! Na nossa fábrica de sites e software, 
                  cada linha de código é uma oportunidade de crescimento. Vamos criar algo extraordinário para o seu negócio
                </p>
              </div>
              <div  className="right">
                 <div className="box">
                  <img src="/web1.jpg" alt="" />
                 </div>
              </div>
           </div>
          </ContainerOne>
          <ContainerTwo id="servicos">
            <div className="content">
              {Service.map((i,k)=><CardService key={k} service={i} />)}
            </div>
          </ContainerTwo>
          <ContainerTrue id="depoimentos">
            <h2>O que Nossos Clientes Dizem</h2>
            <div className="content">
              { FeedbackClientes.map((f,k)=><CardDepoiment key={k} depoiment={f} />) }
            </div>
          </ContainerTrue>
          <ContainerFour id="vantagens">
            <div className="content">
                <div className="left">
               
                </div>
                <div className="right">
                <h5>Vantagens Para você e o seu negócio</h5>
                 <ul>
                      <li><Ok />Seja Encontrado por mais clientes</li>
                      <li><Ok />Receba Pagamentos de forma simples,segura e digital</li>
                      <li><Ok />Deixe que os clientes te encontre</li>
                      <li><Ok />Aumente suas vendas</li>
                      <li><Ok />Conveniência para os cliente</li>
                      <li><Ok />Credibilidade e profissionalismo</li>
                  </ul>
                </div>
            </div>
          </ContainerFour>
          <ContainerFive id="duvidas">
            <h4 className="title">Dúvidas Frequentes</h4>
              {Faqs.map((f,k)=><CardDoubt key={k} doubt={f} />) }
          </ContainerFive>

        <ScrollToTopButton />
        </div>
      </Main>
      <Footer />
    </div>
  )
}

export default App
