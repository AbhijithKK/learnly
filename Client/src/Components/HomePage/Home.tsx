
import Button from '../Button/Button'
import Navbar from '../Navbar/Navbar'
import './Home.css'
const Home = () => {
  return (
    <>

   
      <div className="home-main">
      <Navbar/>
    <div className="home-section1">
      <div className="home-txt-container">
        <div className="headding">
       Online<br/>Learning
        </div>
        <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Vero laborum odit, suscipit tempore quam corporis 
             veniam amet sit saepe minima ratione voluptatum optio 
             officia in, aliquid ab sed libero deleniti?
        </div>
        <div style={{
            marginTop:"30px"
        }}>
<Button bColor='blue' height='50px' name='REGISTER' width='150px' />
        </div>
      </div>
    </div>
      </div>
    </>
  )
}

export default Home
