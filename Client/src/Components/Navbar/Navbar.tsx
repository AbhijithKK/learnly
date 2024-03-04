import { useState } from "react";
import logo from "../../assets/learnly-high-resolution-color-logo 1.png";
import cart from '../../assets/icons8-cart-60.png'
import "./Navbar.css";
const Navbar = () => {
  const [profileDrop, setProfileDrop] = useState<boolean>(false);
  return (
    <>
      <div className="nav-main">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-titles">
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Challengs</li>
          </ul>
        </div>



<div className="nav-right-side">

<div className="navbar-cart-img">
        <img src={cart} alt="" className="navbar-cart-img-img"  />
<div className="navbar-cart-item-count">
  5
</div>
        </div>

        <div className="nav-profile">
          <div onClick={() => setProfileDrop(!profileDrop)}>
            <img src={logo} alt=""  />
            <span
              style={{
                cursor: "pointer",
              }}
              >
              &#x25BC;
            </span>
          </div>
          <div
            className={
              profileDrop
              ? " nav-dropdown"
              : "nav-dropdown nav-dropdown-toggle "
            }
            >
            Logout
          </div>
        </div>
            </div>        
      </div>
      <div className="mob-nav-main">
        <div>Home</div>|<div>Courses</div>|<div>Challengs</div>
      </div>
    </>
  );
};

export default Navbar;
