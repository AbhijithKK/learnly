import { useState } from "react"
import Button from "../Button/Button"
import InputBox from "../InputBox/InputBox"
import LSpageTemplate from "../LoginAndSignupTemplate/LSpageTemplate"


const Signup = () => {
    const [email,setEmail]=useState<string|number>('')
    const [password,setPassword]=useState<string|number>('')
    const Login= ()=>{
     console.log(email,password);
     
    }
  return (
    <>
      <LSpageTemplate 
      link="/login"
      linkName="Login"
       title="SignUp"
        rboxHeight="60vh" 
        linkText="Already have an account...?"
       BtnComponent={<Button bColor="black" height="30px" width="60px" name="Signup" BtnClick={Login}/>}
        InputComponent ={[
            <InputBox height="30px" width="80%" placeHolder="First Name" type="text" onChangeValue={(e:string|number)=>setEmail(e)}/>,
            <InputBox height="30px" width="80%" placeHolder="Last Name" type="text" onChangeValue={(e:string|number)=>setEmail(e)}/>,
            <InputBox height="30px" width="80%" placeHolder="Phone" type="number" onChangeValue={(e:string|number)=>setEmail(e)}/>,
            <InputBox height="30px" width="80%" placeHolder="Email Address" type="email" onChangeValue={(e:string|number)=>setEmail(e)}/>,
            <InputBox height="30px" width="80%" placeHolder="Password" type="password" onChangeValue={(e:string|number)=>setPassword(e)}/>,
        ]}
         />
    </>
  )
}

export default Signup
