

export interface InputBoxInterface{
    type:string
    placeHolder:string
    height:string
    width:string
    onChangeValue:(value:string|number)=>{}
}

export interface ButtonInterface{
    height:string
    width:string
    bColor:string
    BtnClick:()=>void;
}