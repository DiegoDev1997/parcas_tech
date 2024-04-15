import styled from "styled-components";
import { StyleApp } from "../../styles/style";

export const Button=styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: ${StyleApp.bgAppPrimary};
outline: 1px solid ${StyleApp.bgAppSecondary};
padding: 12px 13px;
border-radius: 13px;
color: #FFF;
cursor: pointer;
position: fixed;
top: 90vh;
bottom:4vh;
right: 1vw;
border: none;
transition: all ease .3s;
.svg{
    fill:${StyleApp.bgAppSecondary};
    height:55px;
}

&:hover{
    background-color: ${StyleApp.bgAppSecondary};
    outline: 1px solid ${StyleApp.bgAppPrimary};
    color: #FFF;
    .svg{
        fill:${StyleApp.bgAppPrimary};
    }
}


`