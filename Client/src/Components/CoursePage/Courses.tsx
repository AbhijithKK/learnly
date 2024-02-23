import "./Courses.css";
import Cbox from "../CourseBox/Cbox";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Courses = () => {
  return (
    <>
      <Navbar />
      <div className="couses-mains">
        <h2 className="courses-head">Courses</h2>
        <div className="couse-cboxes">
          <Cbox
            image=""
            hedding="webdevolpment"
            discription="wnhbgfdhgfdnbgfdmnbvfytgrfdfnfjkvnkjndcn sdjvhbfdvn hjvbs vjfdj dfjjv sdjvh bf fj fdjhbdj vjfdvbsdfjb"
            lesson="5lessons"
            payment=" 500"
          />
        </div>
        <div className="couse-cboxes">
          <Cbox
            image=""
            hedding="webdevolpment"
            discription="wnhbgfdhgfdnbgfdmnbvfytgrfdfnfjkvnkjndcn sdjvhbfdvn hjvbs vjfdj dfjjv sdjvh bf fj fdjhbdj vjfdvbsdfjb"
            lesson="5lessons"
            payment=" 500"
          />
        </div>
        <div className="couse-cboxes">
          <Cbox
            image=""
            hedding="webdevolpment"
            discription="wnhbgfdhgfdnbgfdmnbvfytgrfdfnfjkvnkjndcn sdjvhbfdvn hjvbs vjfdj dfjjv sdjvh bf fj fdjhbdj vjfdvbsdfjb"
            lesson="5lessons"
            payment=" 500"
          />
        </div>
        <div className="couse-cboxes">
          <Cbox
            image=""
            hedding="webdevolpment"
            discription="wnhbgfdhgfdnbgfdmnbvfytgrfdfnfjkvnkjndcn sdjvhbfdvn hjvbs vjfdj dfjjv sdjvh bf fj fdjhbdj vjfdvbsdfjb"
            lesson="5lessons"
            payment=" 500"
          />
        </div>
        <div className="couse-cboxes">
          <Cbox
            image=""
            hedding="webdevolpment"
            discription="wnhbgfdhgfdnbgfdmnbvfytgrfdfnfjkvnkjndcn sdjvhbfdvn hjvbs vjfdj dfjjv sdjvh bf fj fdjhbdj vjfdvbsdfjb"
            lesson="5lessons"
            payment=" 500"
          />
        </div>
      </div>
      <div className="courses-footer-mob">
        <Footer />
      </div>
    </>
  );
};

export default Courses;
