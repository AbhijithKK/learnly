import { ConversationboxInterface, dialogboxInterface } from "../../Utils/Interfaces";
import "./Community.css";

const DialogBox = ({ chat, senderId }:dialogboxInterface) => {
  return (
    <>
      {chat?.map((val, i:number) => (
        // <div className="chat-single-box" key={i}>
        <div key={i}
          className={
            senderId === val.sender_id
              ? "dialogbox-right-side"
              : "dialogbox-left-side"
          }
        >
          <p>{val.message}</p>
        </div>
        // </div>
      ))}
    </>
  );
};

export default DialogBox;
