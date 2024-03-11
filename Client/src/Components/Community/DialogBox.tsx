import {  dialogboxInterface } from "../../Utils/Interfaces";
import "./Community.css";

const DialogBox = ({ chat, senderId }:dialogboxInterface) => {
  return (
    <>
      {chat?.map((val, i:number) => (
        <div key={i}
          className={
            senderId === val.sender_id
              ? "dialogbox-right-side"
              : "dialogbox-left-side"
          }
        >
          <p>{val.message}</p>
        </div>
      ))}
    </>
  );
};

export default DialogBox;
