import "./AdminHome.css";
import DashBoardBox from "./AdminHomeBox";
import AdminChart from "./AdminHomeChart";
const AdminHome = () => {
  return (
    <div className="admin-home-container">
      <div className="admin-page-name">
        DashBoard
      </div>
      <div className="admin-dashbord-box">
        
       <DashBoardBox mainData="₹ 5451.255" titleText="Total Sales" />
       <DashBoardBox mainData="25" titleText="Total Courses" />
      </div>
      {/* end box div */}
      {/* start chart section */}
      <div className="admin-dashboard-chart">
<AdminChart/>
      </div>
    </div>
  );
};

export default AdminHome;
