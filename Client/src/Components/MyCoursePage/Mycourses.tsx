import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Syllobus from '../Syllobus/Syllobus';
import './Mycourses.css'

const Mycourses = () => {
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
      <div className="my-courses-countainer">
        <div className="my-course-video-wall">
            <video src=""></video>
        </div>
        <div className="my-courses-syllobus">
{
    syllobus.map((val,i)=>(
        <Syllobus index={i+1} obj={val}/>
    ))
}
        </div>
      </div>
      <div className="my-course-footer">
        <Footer/>
      </div>
    </>
  )
}

export default Mycourses
