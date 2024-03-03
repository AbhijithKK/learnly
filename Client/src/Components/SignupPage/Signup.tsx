import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import LSpageTemplate from "../LoginAndSignupTemplate/LSpageTemplate";
import { useForm } from "../../Utils/useForm";
import { ReactNode, useState } from "react";
import Modal from "../Modal/Modal";

const Signup = () => {
  const [state, setFormVal] = useForm({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });
  const [isOpen,setIsopen]=useState<boolean>(false)
  const Login = () => {
    setIsopen(!isOpen)
  };

  const html:ReactNode=
  <>
  <div className="otp-modal-container">

  <div className="otp-moda-title">
    Verify OTP
  </div>
  <div className="inputbox-otp-modal">
    <InputBox height="2rem" name="otp" type="text" width="90%" 
    value={'112'} placeHolder="Enter OTP" />
  </div>
  <div className="opt-modal-timer">
    cancel time 00.00
  </div>
  <div className="otp-modal-btn">

  <Button bColor="blue" height="2rem" width="50%" name="Submit" />
  </div>
    </div>
  </>
  return (
    <>
      <LSpageTemplate
        link="/login"
        linkName="Login"
        title="SignUp"
        rboxHeight="60vh"
        linkText="Already have an account...?"
        BtnComponent={
          <Button
            bColor="black"
            height="30px"
            width="60px"
            name="Signup"
            BtnClick={Login}
          />
        }
        InputComponent={[
          <InputBox
            value={state.firstName}
            height="30px"
            width="80%"
            placeHolder="First Name"
            type="text"
            onChangeValue={(e: any) => setFormVal(e)}
            name="firstName"
          />,
          <InputBox
            value={state.lastName}
            height="30px"
            width="80%"
            placeHolder="Last Name"
            type="text"
            onChangeValue={(e: any) => setFormVal(e)}
            name="lastName"
          />,
          <InputBox
            value={state.phone}
            height="30px"
            width="80%"
            placeHolder="Phone"
            type="text"
            onChangeValue={(e: any) => setFormVal(e)}
            name="phone"
          />,
          <InputBox
            value={state.email}
            height="30px"
            width="80%"
            placeHolder="Email Address"
            type="email"
            onChangeValue={(e: any) => setFormVal(e)}
            name="email"
          />,
          <InputBox
            value={state.password}
            height="30px"
            width="80%"
            placeHolder="Password"
            type="password"
            onChangeValue={(e: any) => setFormVal(e)}
            name="password"
          />,
        ]}
      />
      {
        isOpen&&
        <Modal  html={html} closeFunc={()=>setIsopen(!isOpen)} />
      }
    </>
  );
};

export default Signup;
