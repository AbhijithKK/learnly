import "./Community.css";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import DialogBox from "./DialogBox";
const ConversationBox = () => {
  return (
    <>
      <div className="chat-page-container">
        <div className="chat-page-head">
          <div className="chat-page-head-left-side">
            <div className="chat-page-head-image">
              <img src="" alt="" />
            </div>
            <div className="head-profile-name">
              <p>abcd</p>
              <p>last seen</p>
            </div>
          </div>
          <div className="chat-page-head-right-side">
            <div className="options">3dots</div>
          </div>
        </div>

        <div className="chat-page-dialogs">
            <DialogBox/>
        </div>
        <div className="chat-page-footer">
          <div className="media-selector">
            <InputBox height="2rem" type="file" width="3.8rem" />
          </div>
          <div className="chat-inputbox">
            <InputBox height="2rem" type="text" width="100%" />
          </div>
          <div className="chat-msg-send-btn">
            <Button bColor="blue" height="2rem" width="100%" name="Send" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversationBox;
