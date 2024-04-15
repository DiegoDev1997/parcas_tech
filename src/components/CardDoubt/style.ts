import styled from "styled-components";
import { StyleApp } from "../../styles/style";

type Props={
    visibleBody:boolean
}
export const Box=styled.div<Props>`
margin: 22px 0;
.top{
    border-radius: 9px;
    background-color: ${StyleApp.bgAppPrimary};
    color: ${StyleApp.bgAppSecondary};
    padding:22px 12px;
    font-size: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom-left-radius: ${props=>props.visibleBody ? '0' : 'auto'};
    border-bottom-right-radius: ${props=>props.visibleBody ? '0' : 'auto'};
    button{
      display: flex;
        align-items: center;
        border: none;
        cursor: pointer;
        transition: all ease .3s;
        justify-content: center;
        border-radius: 8px;
        background-color: ${StyleApp.bgAppSecondary};
        .svg{
            height: 50px;
            width: 50px;
            fill: white;
        }
        &:hover{
            background-color:white;
           outline: 2px solid ${StyleApp.bgAppSecondary};
            .svg{
                fill:${StyleApp.bgAppSecondary};
            }
        }
    }
    }

.bottom{
    display: ${props=>props.visibleBody ? 'flex' : 'none'};
     transition: all ease-in-out .3s;
     border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: 42px 12px;
     border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 1px solid ${StyleApp.bgAppSecondary};
  
    p{
        font-size: 17px;
    }
}


@media screen  and (max-width:750px){
   .top{
    p{
        font-size: 13px;
        margin-right: 14px;
    }

   }
}

`