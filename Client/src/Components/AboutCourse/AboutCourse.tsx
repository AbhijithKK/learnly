import { syllobusInterface } from "../../Utils/Interfaces";
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
              <button>buy now</button>
            </div>
          </div>
        </div>
        <div className="syllobus-main-container">
        {syllobus.map((obj, index) => (
           
                <Syllobus index={index+1} key={index} obj={obj} />
                
                ))}
                </div>
      </div>
    </>
  );
};

export default AboutCourse;
