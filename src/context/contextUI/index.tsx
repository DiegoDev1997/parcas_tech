import { ReactNode, createContext, useState,useContext } from "react";


type Props={
    children:ReactNode
}


type ContexTypeUI={
    stateModal:boolean;
    handleStateModal:(state:boolean)=>void;
    stateMenuMobile:boolean;
    handleStateMenuMobile:(state:boolean)=>void;

}

export const contextUI=createContext<ContexTypeUI>(
    
    {
        stateModal:false,
        handleStateModal:()=>{},
        stateMenuMobile:false,
        handleStateMenuMobile:()=>{}
    } 

    
)

export const ContextUIProvider=({children}:Props)=>{
    const [stateModal,handleStateModal]=useState<boolean>(false)
    const [stateMenuMobile,handleStateMenuMobile]=useState<boolean>(false)
    const [globalTheme,handleGlobalTheme]=useState<'dark' | 'light'>('light')

const values={
    stateModal,handleStateModal,
    stateMenuMobile,handleStateMenuMobile,
    globalTheme,handleGlobalTheme
}

    return <contextUI.Provider value={values}>{children}</contextUI.Provider>
}



export const useContextUI=()=>useContext(contextUI)

