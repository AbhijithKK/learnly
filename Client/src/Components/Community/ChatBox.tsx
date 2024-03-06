import './Community.css'
import imgg from '../../assets/home2.jpg'

const ChatBox = () => {
  return (
    <>
      
                <hr className='chat-box-outerline' />
              <div className="chat-container">
                <div className="sub-chat-conainer">
                    <div className="chat-image-profile">
                  <img src={imgg} alt="" />
                    </div>
                    <div className="chat-user-details">

                  <div className="chat-upper-details">
                    <p className="user-name">abhi</p>
                    <p className="date">jusr now</p>
                  </div>
                  <div className="chat-upper-details">
                    <p className="last-message">last  messagejjjjjjjjjjjjjjjjjjjjjjjjjmmmmmmmmm</p>
                    <p className="without-read-count
                    ">
                        {/* content-read */}

                        2</p>
                  </div>
                </div>
                    </div>
              </div>
                <hr className='chat-box-outerline' />
           
    </>
  )
}

export default ChatBox
