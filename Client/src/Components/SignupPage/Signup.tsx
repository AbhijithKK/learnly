import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import LSpageTemplate from "../LoginAndSignupTemplate/LSpageTemplate";
import { useForm } from "../../Utils/useForm";

const Signup = () => {
  const [state, setFormVal] = useForm({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });
  const Login = () => {
    console.log(state);
  };
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
    </>
  );
};

export default Signup;
