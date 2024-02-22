import "./Footer.css";
import logo from "../../assets/learnly-high-resolution-color-logo 1.png";

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="mob-footer">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer-content">
            "Education is the most powerful weapon which you can use to change
            the world."
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Challengs</li>
          </ul>
        </div>
        <div className="footer-contacs">
          <p>Contact us</p>
          <img src="" alt="insta" />
          <img src="" alt="git" />
          <img src="" alt="linkedin" />
        </div>
      </div>
    </>
  );
};

export default Footer;
