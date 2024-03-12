import AboutCourse from "../AboutCourse/AboutCourse"
import Cart from "../CartPage/Cart"
import CommunityMainPage from "../Community/CommunityMainPage"
import Courses from "../CoursePage/Courses"
import Home from "../HomePage/Home"
import MyCourses from "../MyCourses/MyCourses"
import Payment from "../PaymentPage/Payment"
import PaySuccess from "../PaymentSuccessPage/PaySuccess"
import ProfilePage from "../ProfilePage/ProfilePage"
import {  Route, Routes } from "react-router-dom"

function UserPages() {
  return (
    <>
    <Routes>
    <Route>
    <Route path="/home" element={<Home/>} />
    <Route path="/courses" element={ <Courses/>} />
    <Route path="/aboutcourses" element={ <AboutCourse/>} />
    <Route path="/profile" element={ <ProfilePage/>} />
    <Route path="/cart" element={ <Cart/>} />
    <Route path="/payment" element={ <Payment/> } />
    <Route path="/paymentsuccess" element={ <PaySuccess/>} />
    <Route path="/downloads" element={ <MyCourses/>} />
    <Route path="/community" element={ <CommunityMainPage/>} />
    </Route>
    
    </Routes>
    </>
  )
}

export default UserPages
