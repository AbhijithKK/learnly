import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="side-bar-main-container">
      <div className="side-bar-name-container">
        <div className="side-bar-image">
          <img src="" alt="logo" />
        </div>
        <div className="side-bar-name">DashBoard</div>
      </div>
      
      <div className="side-bar-name-container">
        <div className="side-bar-image">
          <img src="" alt="logo" />
        </div>
        <div className="side-bar-name">All Users</div>
      </div>
      <div className="side-bar-name-container">
        <div className="side-bar-image">
          <img src="" alt="logo" />
        </div>
        <div className="side-bar-name">All Orders</div>
      </div>

      <div className="side-bar-name-container">
        <div className="side-bar-image">
          <img src="" alt="logo" />
        </div>
        <div className="side-bar-name">Add Courses</div>
      </div>

      <div className="side-bar-name-container">
        <div className="side-bar-image">
          <img src="" alt="logo" />
        </div>
        <div className="side-bar-name">Add Offers</div>
      </div>

      <div className="side-bar-name-container">
        <div className="side-bar-image">
          <img src="" alt="logo" />
        </div>
        <div className="side-bar-name">Logout</div>
      </div>
    </div>
  );
};

export default SideBar;
