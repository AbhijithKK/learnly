import "./Community.css";

const DialogBox = ({ chat, senderId }) => {
  return (
    <>
      {chat?.map((val, i) => (
        // <div className="chat-single-box" key={i}>
        <div
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
