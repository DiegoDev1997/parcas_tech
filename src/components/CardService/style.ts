import styled from "styled-components";
import { StyleApp } from "../../styles/style";


export const Box=styled.div`
outline: 1px solid ${StyleApp.bgAppSecondary};
box-shadow: 0 0 12px #222;
border-radius: 33px;
padding:30px 15px;
background-color:transparent;
transition: all ease 0.3s;
&:hover{
    box-shadow: 0 0 32px #000;
}
.title-icon{
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    h3{
        font-size: 27px;
        font-family: 'Poppins';
        color: ${StyleApp.bgAppSecondary};
    }
    .svg{
        height: 170px;
        width: 170px;
        fill: ${StyleApp.bgAppSecondary};
       margin-bottom: 30px;
        
    }
}
.details{
    margin:30px 12px;
    height:250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:start;
    li{
        display: flex;
        color:white;
        font-size: 15px;
        .svg{
            height: 55px;
            width:55px;
            fill: ${StyleApp.bgAppPrimary};
        }
    }
}
.cx-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:20px 0;
    a{
        padding: 32px 22px;
        font-size: 19px;
        color:${StyleApp.bgAppSecondary};
        text-decoration: none;
        border-radius: 22px;
        transition: all ease .3s;
       outline:1px solid  ${StyleApp.bgAppSecondary};
       &:hover{
        color:white;
        box-shadow:  0 0 12px #000;
        background-color: ${StyleApp.bgAppSecondary};
        outline:1px solid  white;
       }
    }
}

@media screen and (max-width:950px){
    width:auto;
    padding:30px 11px;
   .title-icon{
    h3{
        font-size: 21px;
        .svg{
            height: 90px;
            width: 90px;
        }
    }
   }
}
`