import Box from "../Box/Box";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home-main">
        <Navbar />

        <div className="home-section1">
          <div className="home-txt-container">
            <div className="headding">
              Online
              <br />
              Learning
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              laborum odit, suscipit tempore quam corporis veniam amet sit saepe
              minima ratione voluptatum optio officia in, aliquid ab sed libero
              deleniti?
            </div>
            <div
              style={{
                marginTop: "30px",
              }}
            >
              <Button
                bColor="blue"
                height="50px"
                name="REGISTER"
                width="150px"
              />
            </div>
          </div>
        </div>
        {/* section 2 scrollbar start */}
        <div className="home-boxes">
          <div className="home-box-title">Top Courses</div>
          <div className="home-box">
            <Box title="wwww"  />
            <Box title="wgj" />
            <Box title="wwww" />
            <Box title="wwww" />
            <Box title="wwww" />
          </div>
          <div className="home-box-more-btn">View Courses &gt;</div>
        </div>

        {/* section 3 */}

        <div className="home-section3">
          <div className="home-txt-container">
            <div className="headding">
              Online
              <br />
              Learning
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              laborum odit, suscipit tempore quam corporis veniam amet sit saepe
              minima ratione voluptatum optio officia in, aliquid ab sed libero
              deleniti?
            </div>
            <div
              style={{
                marginTop: "30px",
              }}
            >
              <Button
                bColor="blue"
                height="50px"
                name="REGISTER"
                width="150px"
              />
            </div>
          </div>
        </div>
        <div className="home-footer-mob">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
