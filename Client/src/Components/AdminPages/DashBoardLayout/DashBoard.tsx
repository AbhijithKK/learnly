import AdminNavbar from '../AdminNav/AdminNavbar'
import AllUsers from '../AllUsersLayout/AllUsers'
import AdminHome from '../HomePage/AdminHome'
import SideBar from '../SideBar/SideBar'
import './Dashboard.css'
const DashBoard = () => {
  return (
    <>
    <div className="dashboard-container">
      <div className="dashboard-navbar">
       <AdminNavbar/>
      </div>
      <div className="dashboard-sub-container">
        <div className="dashboard-side-bar">
          <SideBar/>
        </div>
        <div className="dashboard-home">
         {/* <AdminHome/> */}
         <AllUsers/>
        </div>
      </div>
      </div>      
    </>
  )
}

export default DashBoard
