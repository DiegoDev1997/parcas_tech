import styled from "styled-components";
import { StyleApp } from './style';


export const Main=styled.main`
display: flex;
justify-content: center;
.content-main{
    width: 100%;
    min-height: 100vh;
    
    .espace-margin{
      margin:0 30px;
    }
}

@media screen and (max-width:1180px) {
   .content-main{
    .espace-margin{
        margin: 0;
   }
   } 
}
`

export const ContainerOne=styled.section`
min-height: 700px;
padding: 200px 40px ;


.content-about{
    display: flex;
    .left{
        width: 50%;
        h2{
            font-size: 53px;
            margin: 32px;
        }
        p{
            color: grey;
            font-size:22px;
            margin: 32px 0;
            line-height: 32px;
        }
    }
    .right{
        flex:1;
        .box{
            display: flex;
            justify-content: end;
            height: 100%;
            width:100%;
            img{
                height:900px;
                border-radius: 33px;
                width:70%;
            }
           }
    }
}
@media screen and (max-width:950px) {
    height: auto;
    padding: 70px 12px;
    .content-about{
        flex-direction: column;

        .left,.right{
            width: 100%;
        }
        .left{
            h2{
                font-size: 28px;
                margin:25px  0;
            }
            p{
                font-size: 18px;
            }
        }

    .right{ 
            min-height: 500px;
            margin: 50px 0;
            .box{
                justify-content: center;
                width: 100%;
                img{
                    width: 90%;
                    height: 500px;
                }
            }
        }
}
}

@media screen and (min-width:820px) and (max-width:1180px) {
    height: auto;
    padding: 70px 12px;
    .content-about{
        flex-direction: column;

        .left,.right{
            width: 100%;
        }
        .left{
            h2{
                font-size: 28px;
                margin:25px  0;
            }
            p{
                font-size: 18px;
            }
        }
        .right{
            
            min-height: 500px;
            margin: 50px 0;
            .box{
                justify-content: center;
                width: 100%;
                img{
                    width: 50%;
                    height: 700px;
                }
            }
        }
    }
}

`

export const ContainerTwo=styled.section`
background-color:${StyleApp.bgAppPrimary};
min-height: 900px;
display: flex;
padding:100px 100px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h2{
    margin-bottom: 80px;
    color: ${StyleApp.bgAppSecondary};
    font-size: 36px;
}
.content{
    display: grid;
    gap:47px;
    grid-template-columns: repeat(3,1fr);
}


@media screen and (max-width:1180px){
    height: auto;
    padding: 200px 12px;
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
    
    }
}
`

export const ContainerTrue=styled.section`
padding: 200px 100px;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
h2{
    font-size: 33px;
    margin-bottom: 50px;
}
.content{
    display: grid;
    gap:22px 17px;
    grid-template-columns: repeat(3,1fr);
}

@media screen and (max-width:1180px) {
    height: auto;
    padding: 200px 12px;
    .content{
        display: flex;
        flex-direction: column;
    }
}

`

export const ContainerFour=styled.section`
min-height: 900px;
background-color: ${StyleApp.bgAppPrimary};
display: flex;
flex-direction: column;
background:url('/web2.png');
background-position:center;
background-size: cover;
background-repeat:no-repeat;

.content{
    display: flex;
    .left{
       width:60%;

    }
    .right{
        padding: 200px 60px ;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h5{
            font-size: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 100px;
            color:${StyleApp.bgAppPrimary};
        }
        ul{
            li{
                display: flex;
                color: white;
                align-items: center;
                font-size: 26px;
                margin: 22px 0;
                font-family:'Segoe UI';
                .svg{
                    fill:${StyleApp.bgAppPrimary};
                    height: 45px;
                    margin-right: 10px;
                }
            }
          }
    }
}



@media screen and (max-width:1180px) {
    height: auto;
    padding: 70px 12px;
    background:none;
    background-color: ${StyleApp.bgAppSecondary};
    .content{
        flex-direction: column;
        .left,.right{
            width:100%;
        }
        .right{
            padding: 50px 0;
            margin-left: 0;
            h5{
                font-size: 27px;
                text-align: center;
            }
            ul{
                li{
                    font-size: 16px;
                    .svg{
                        height: 25px;
                        margin: 13px 8px;
                        align-items: flex-start;
                    }
                }
            }
        }
    }
}


`

export const ContainerFive=styled.section`
padding: 100px 30px;
margin-bottom: 200px;

h4{
    font-size: 30px;
    text-align: center;
    margin-bottom: 100px;
}

@media screen and(max-width:1180px) {
    height: auto;
    padding: 100px 12px;
    margin-bottom: 50px;
 h4{
    text-align: center;
 }
}
`