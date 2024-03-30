import logo from "../../../assets/learnly-high-resolution-color-logo 1.png";
import "./AdminNavbar.css";
const AdminNavbar = () => {
  return (
    <>
      <div className="nav-main">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>

        <div className="nav-right-side">
          <div className="nav-profile">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
