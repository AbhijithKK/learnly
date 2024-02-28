import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Syllobus from "../Syllobus/Syllobus";
import "./AboutCourse.css";

const AboutCourse = () => {
  let syllobus: any = [
    {
      title: "abcd",
      id: 0,
      arrayLesson: ["chaptrr-1", "chapter-2"],
    },
    {
      title: "abdd",
      id: 1,
      arrayLesson: ["chaptrr-1", "chapter-2", "chaptrr-1", "chapter-2"],
    },
    {
      title: "abcd",
      id: 2,
      arrayLesson: ["chaptrr-1", "chapter-2"],
    },
  ];
  return (
    <>
    <Navbar/>
      <div className="abot-page-main">
        <div className="about-vid-prev-main">
          <div className="vid-prev">
            <video src="">vid</video>
          </div>
          <div className="vid-title">web devolopment</div>
          <div className="vid-discription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iusto
            veritatis ad nisi voluptatum nulla cumque asperiores numquam
            doloribus omnis dolore rem consectetur nemo. Doloremque, in. Quo
            molestiae neque quasi.
          </div>
          <div className="vid-prize-buynow">
            <div className="vid-prize">500</div>
            <div className="buy-btn">
              <Button bColor="blue" height="1.8rem" name="Buy now" width="6rem"/> 
            </div>
          </div>
          <div className="about-about-course-main">
        <div className="about-about-sub">
          <div className="about-about-headding">Author</div>
          <div className="about-about-img-name">
            <img src="" alt="image" />
            <p>john</p>
          </div>
          <div className="about-about-discription">I will be your
           lead trainer in this course. Within no time, I will help you to understand the subject in an easy manner. I have a huge 
          experience in online training and recording videos.
           Let's get started!</div>
        </div>
        <div className="about-about-course-dis-main">
          <div className="a-a-c-h">About This Course</div>
          <div className="a-a-c-d">Javascript is doing way more than 
          it was designed for. Now we can do all backend stuff with 
          javascript. We will learn to write a complete backend code 
          in modern javascript. First, we will start by setting up 
          tools using VSCode. After that, we will learn to create our 
          own web server without any third party module.</div>
        </div>
      </div>
        </div>
        
        <div className="syllobus-main-container">
          {syllobus.map((obj, index) => (
            <Syllobus index={index + 1} key={index} obj={obj} />
          ))}
        </div>
      </div>
     
      <div className="courses-footer-mob-about">
        <Footer />
      </div>
    </>
  );
};

export default AboutCourse;
