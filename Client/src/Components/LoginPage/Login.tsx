import { useState } from "react"
import Button from "../Button/Button"
import InputBox from "../InputBox/InputBox"
import LSpageTemplate from "../LoginAndSignupTemplate/LSpageTemplate"


const Login = () => {
    const [email,setEmail]=useState<string|number>('')
    const [password,setPassword]=useState<string|number>('')
    const Login= ()=>{
     console.log(email,password);
     
    }
  return (
    <>
      <LSpageTemplate linkName="Signup" link="/signup" title="Login" rboxHeight="40vh" linkText="Dont have an account...?"
       BtnComponent={<Button bColor="black" height="30px" width="60px" name="Login" BtnClick={Login}/>}
        InputComponent ={[
            <InputBox value={email} height="30px" width="80%" placeHolder="Email Address" type="email" onChangeValue={(e:any)=>setEmail(e.target.value)} name=""/>,
            <InputBox value={password} height="30px" width="80%" placeHolder="Password" type="password" onChangeValue={(e:any)=>setPassword(e.target.value)} name=""/>,
        ]}
         />
    </>
  )
}

export default Login
