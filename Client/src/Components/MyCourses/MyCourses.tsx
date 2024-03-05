import Cbox from "../CourseBox/Cbox";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import '../CoursePage/Courses.css'
const MyCourses = () => {
  return (
    <>
       <Navbar />
      <div className="couses-mains">
        <h2 className="courses-head">My courses</h2>
        <div className="couse-cboxes">
          <Cbox
            image=""
            hedding="webdevolpment"
            discription="wnhbgfdhgfdnbgfdmnbvfytgrfdfnfjkvnkjndcn sdjvhbfdvn hjvbs vjfdj dfjjv sdjvh bf fj fdjhbdj vjfdvbsdfjb"
            lesson="5lessons"
            payment="Ready to Watch"
          />
        </div>
        <div className="couse-cboxes">
          <Cbox
            image=""
            hedding="webdevolpment"
            discription="wnhbgfdhgfdnbgfdmnbvfytgrfdfnfjkvnkjndcn sdjvhbfdvn hjvbs vjfdj dfjjv sdjvh bf fj fdjhbdj vjfdvbsdfjb"
            lesson="5lessons"
            payment=" Ready to Watch"
          />
        </div>
        
        <div className="couse-cboxes">
          <Cbox
            image=""
            hedding="webdevolpment"
            discription="wnhbgfdhgfdnbgfdmnbvfytgrfdfnfjkvnkjndcn sdjvhbfdvn hjvbs vjfdj dfjjv sdjvh bf fj fdjhbdj vjfdvbsdfjb"
            lesson="5lessons"
            payment=" Ready to Watch"
          />
        </div>
      </div>
      <div className="courses-footer-mob">
        <Footer />
      </div>
    </>
  )
}

export default MyCourses
