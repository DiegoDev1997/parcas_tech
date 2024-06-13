import styled from "styled-components";
import { StyleApp } from "../../styles/style";

type Props={
  visibleMobileMenu:boolean
}

export const Box=styled.header<Props>`
background-color: ${StyleApp.bgAppPrimary};
color: white;
display: flex;
justify-content: space-around;
padding:30px 19px;
align-items: center;
.left{
    font-size: 33px;

    .logo{
     display: flex;
     height: 70px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
       img{
        height: 110px;
        border: 1px solid ${StyleApp.bgAppPrimary};
       }

  
    }
}
.right{
    display: flex;
    .open-mobile{
      display:none;
    }
   nav{
    .links{


      .close-menu{
        display: none;
      }
        a{
          width: 100px;
        margin:12px;
        color: #fff;
        text-decoration: none;
        padding: 9px 32px;
        font-size: 13px;
        border-radius: 12px;
        border: 1px solid transparent;
        transition: all ease .3s;
          &:hover{
            color: ${StyleApp.bgAppSecondary};
            border: 1.12px solid  ${StyleApp.bgAppSecondary};
          }
        }
    }
   }
}

@media screen and (max-width:950px){
  justify-content: space-between;
  .left{
    .logo{
      img{
        height: 110px;
      }
      h2{
      font-size: 16px;
    }
    p{
      font-size: 11px;
      display:none;
    }
    }
  }
  .right{

    .open-mobile{
      display:flex;
      height: 55px;
      width: 55px;
      border-radius: 8px;
      border: none;
      .svg{
        height: 100%;
        width:100%;
        stroke:${StyleApp.bgAppSecondary}
      }
    }

    nav{
      display: ${props=>props.visibleMobileMenu ? 'flex':'hidden'};
      position: fixed;
      transition: all ease .3s;
      top: 0;
      flex-direction: column;
      right:0;
      z-index: 1;
      height: 100vh;
      width: ${props=>props.visibleMobileMenu ? '50vw':'0'};
      box-shadow: 0 0 12px grey;
      background:linear-gradient( to bottom, ${StyleApp.bgAppPrimary},#222);
        .links{
          display: ${props=>props.visibleMobileMenu ? 'flex':'none'};
          flex-direction: column;
          .close-menu{
            display:flex;
            display: flex;
            justify-content: end;
            margin-bottom: 100px;
            padding: 12px;
            background-color:white;
            button{
              background-color: transparent;
              border: none;
              height: 35px;
               width: 35px;
              .fill{
                height: 100%;
                width:100%;
                fill:${StyleApp.bgAppSecondary}
              }
           }
          }
          a{
            display: flex;
           align-items: center;
           justify-content: center;
            font-size: 15px;
            padding: 12px 0;
            border-bottom: 1px solid grey;
          }
        }
    }
  }
}
`