import styled from "styled-components";
import { StyleApp } from "../../styles/style";


export const Container=styled.footer`
background-color: #2D3250;
padding: 90px 50px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.content{
    display: flex;
    justify-content: space-around;
    color: #DEdede;


    p{
        font-weight: 500;
        margin: 12px 0;
        font-family:'Montserrat';
    }
    h3{
        margin-bottom: 50px;
        font-size: 22px;
        display: flex;
        align-items: center;
        .svg{
            height: 35px;
            width: 35px;
        }
    }
    .about{
        width: 50%;
        
    }
    .links{
        flex: 1;
        display: flex;
        padding: 30px;
        flex-direction: column;
        align-items: center;
        width: max-content;
        color: #DEdede;
        a{
            margin: 5px;
            width: 60%;
            display: flex;
            align-items: center;
            padding:22px 12px;
            border-radius: 29px;
            color: #aaa;
            transition: all ease 0.1s;
            .svg{
                height: 35px;
                width: 35px;
                margin-right: 12px;
                stroke: #aaa;
               fill:#aaa;
            }
             &:nth-child(2){
                &:hover{
                    outline:2px solid #DA0C81;
                    color: #DA0C81;
                    .svg{
                        stroke: #DA0C81;
                        fill: #DA0C81;
                    }
                }
            }
            &:nth-child(3){
                &:hover{
                    outline:2px solid #65B741;
                    color: #65B741;
                    .svg{
                        stroke: #65B741;
                        fill:#65B741;
                    }
                }
            }
            &:nth-child(4){
               
                &:hover{
                    outline:2px solid #00A8B5;
                    color: #00A8B5;
                }
            }
           
        }
    }
}
.divider{
    height: 1.85px;
    background-color: #aaa;
    width: 70%;
    margin: 20px 0;
}

.line{
    margin: 30px 0;
    p{
        text-align: center;
        color: ${StyleApp.bgTheme};
        font-weight: 500;
    }
}

@media screen  and (max-width:850px){
    padding: 90px 10px;
    justify-content: flex-start;
    .content{
        
        flex-direction: column;
        padding: 20px;
        .about{
            width: 100%;
            h3{
                font-weight:500;
                font-size: 19px;
            }
        };
        .links{
            margin: 30px 0;
            width: 100%;
            padding: 30px 0;
            h3{
                font-weight:500;
                margin: 12px 0;
                font-size: 19px;
            }
            a{
                width: 100%;
                margin: 4px 0;
            }
        }
    }
}
`