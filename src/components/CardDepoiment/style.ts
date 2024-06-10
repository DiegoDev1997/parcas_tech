
import styled from "styled-components";
import { StyleApp } from "../../styles/style";

export const Box=styled.div`
outline: 1px solid #DDD;
padding: 32px;
background-color: #EEEEEE;
border-radius: 33px;
box-shadow: 0 0 22px #222;
    background:linear-gradient(to bottom,${StyleApp.bgAppPrimary},${StyleApp.bgAppSecondary});

h3{
    font-size: 23px;
    margin: 30px;
    color: ${StyleApp.bgAppSecondary};
  font-size: 27px;
  
}
p{
    font-size: 16px;
    color:white;
    font-style:oblique;
    font-family: 'Poppins';
}
transition: all ease 0.3s;
&:hover{
    h3{
        color: ${StyleApp.bgAppSecondary};
        font-size: 27px;
    }
    p{
        color: #DDD;
    }
    box-shadow: 0 0 22px #222;
    background:linear-gradient(to bottom,${StyleApp.bgAppPrimary},${StyleApp.bgAppSecondary});
}
@media screen and (max-width:950px){
    width: 100%;
    padding:30px 21px;
    p{
        font-size: 15px;
    }
   
}


`