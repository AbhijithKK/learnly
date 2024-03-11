import "./Community.css";
import imgg from "../../assets/home2.jpg";
import { chatboxInterface } from "../../Utils/Interfaces";

const ChatBox = ({ image, name, lastMsgTime, lastMessage, id, idPicker }:chatboxInterface) => {
  return (
    <>
      <hr className="chat-box-outerline" />
      <div className="chat-container" onClick={() => idPicker(id)}>
        <div className="sub-chat-conainer">
          <div className="chat-image-profile">
            <img src={image?image:imgg} alt="" />
          </div>
          <div className="chat-user-details">
            <div className="chat-upper-details">
              <p className="user-name">{name}</p>
              <p className="date">{lastMsgTime}</p>
            </div>
            <div className="chat-upper-details">
              <p className="last-message">{lastMessage}</p>
              <p
                className="without-read-count
                    "
              >
                {/* content-read */}2
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="chat-box-outerline" />
    </>
  );
};

export default ChatBox;
