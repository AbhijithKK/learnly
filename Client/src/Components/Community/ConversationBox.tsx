import "./Community.css";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import optionmenu from '../../assets/icons8-menu-vertical-50.png'
import backImg from '../../assets/icons8-back-arrow-50.png'
import ImgAdder from '../../assets/icons8-image-file-add-64.png'
import DialogBox from "./DialogBox";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { ConversationboxInterface } from "../../Utils/Interfaces";
const ConversationBox = ({ data, gobackBtn }:ConversationboxInterface) => {
  const [menuIsopen,SemenuIsopen]=useState<boolean>(false)
  const menuoptionModal = () => {
    SemenuIsopen(!menuIsopen)
  };
  return (
    <>
      <div className="chat-page-container">
        <div className="chat-page-head">
          <div className="chat-page-head-left-side">
            <div className="chat-page-head-image">
              <img
                className="goback-image"
                src={backImg}
                onClick={gobackBtn}
                alt="goback"
              />
              <img src="" alt="" />
            </div>
            <div className="head-profile-name">
              <p>{data.name}</p>
              <p>{data.lastMessageTime}</p>
            </div>
          </div>
          <div className="chat-page-head-right-side">
            <div className="options">
              <img onClick={menuoptionModal} src={optionmenu} alt="menu" />
            </div>
          </div>
        </div>
        {data.length === 0 ? (
          <div className="chat-page-dialogs dialogtext-decaration-chat">
            <p>(Click the conversation box and start chat...)</p>
          </div>
        ) : (
          <div className="chat-page-dialogs">
            <DialogBox senderId={data.id} chat={data.previousMessages} />
          </div>
        )}

        <div className="chat-page-footer">
          <div className="media-selector">
            <div className="chat-file-upload-img">
              <img src={ImgAdder} alt="" />
            </div>
            <div className="chat-file-upload-input-box">
            <InputBox height="2rem" type="file" width="2.25rem" />
            </div>
          </div>
          <div className="chat-inputbox">
            <InputBox height="2rem" type="text" width="100%" />
          </div>
          <div className="chat-msg-send-btn">
            <Button bColor="blue" height="2rem" width="100%" name="Send" />
          </div>
        </div>
      </div>
      {
        menuIsopen&&
        <Modal closeFunc={menuoptionModal} html />
      }
    </>
  );
};

export default ConversationBox;
