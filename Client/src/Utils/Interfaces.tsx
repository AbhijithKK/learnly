import React from "react"


export interface InputBoxInterface{
    type:string
    placeHolder:string
    height:string
    width:string
    onChangeValue:(value:string|number)=>void
}

export interface ButtonInterface{
    height:string
    width:string
    bColor:string
    name:string
    BtnClick:()=>void;
}

export interface LSTemplateInterface{
    title:string
    InputComponent:React.ReactNode[]
    link:string
    BtnComponent:React.ReactNode
}