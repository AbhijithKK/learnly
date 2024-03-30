import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Components/LoginPage/Login"
import Signup from "./Components/SignupPage/Signup"
import UserPages from "./Components/Pages/UserPages"
import DashBoard from "./Components/AdminPages/DashBoardLayout/DashBoard"
function App() {

  return (
   <>
   {/* <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/user/*" element={<UserPages/>} />
   </Routes>
   </BrowserRouter> */}
   <DashBoard/>
     </>
  )
}

export default App
