import React from "react"


export interface InputBoxInterface{
    type:string
    placeHolder:string
    height:string
    width:string
    onChangeValue:(value:{})=>void
    name:string|undefined
    value:string|number
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
    rboxHeight:string
    linkText:string
    linkName:string
}

export interface BoxInterface{
    title:string
    image:string
    btnfnc:()=>{}
}