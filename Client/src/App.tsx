import Button from "./Components/Button/Button"
import InputBox from "./Components/InputBox/InputBox"
import LSpageTemplate from "./Components/LoginAndSignupTemplate/LSpageTemplate"


function App() {
function btn() {
  
}
function btna(a:string|number) {
  
}
function btna1(a:string|number) {
  
}
  return (
   <>
   <LSpageTemplate 
   BtnComponent={<Button name="btn" bColor="red" height="50px" width="20px" key={1} BtnClick={btn} />}
   link="fff"
    title="login" 
   InputComponent={[<InputBox height="30px" width="80%" placeHolder="name" type="email"/>,
   <InputBox height="30px" width="80%" placeHolder="name" type="email"/>,
  ]}
   />
   </>
  )
}

export default App
