import { useState } from "react"

export const useForm=(initialval:any):any=>{
const[state,setState]=useState(initialval)
const setForm=(event:any)=> {
    setState({
        ...state,
        [event.target.name]:event.target.value
    })
}
return [state,setForm]
}




  