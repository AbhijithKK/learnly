import { useState } from "react";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import ChatBox from "./ChatBox";
import homelogo from '../../assets/icons8-home-50.png'
import "./Community.css";
import ConversationBox from "./ConversationBox";
const CommunityMainPage = () => {
  const [conversationData, setConversationData] = useState<any>([]);
  const conversationSetter = (id) => {
    const data = arr.find((val) => val.id == id);
    setConversationData(data);
  };
  let arr: any = [
    {
      id: 1,
      image: null,
      name: "abhiram",
      lastMessageTime: "yesterday",
      lastMessage: "hii da",
      unreadMessageCount: "1",
      previousMessages: [
        {
          sender_id: 2,
          receiver_id: 1,
          message: "hlooo",
          timestamp: 12,
        },
        {
          sender_id: 2,
          receiver_id: 1,
          message: "hiiii",
          timestamp: 13,
        },
        {
          sender_id: 1,
          receiver_id: 2,
          message: "sender",
          timestamp: 17,
        },
        {
          sender_id: 2,
          receiver_id: 1,
          message: "sender",
          timestamp: 17,
        },
        {
          sender_id: 1,
          receiver_id: 2,
          message: "sender",
          timestamp: 17,
        },
      ],
    },
    {
      id: 2,
      image: null,
      name: "rahul",
      lastMessageTime: "just now",
      lastMessage: "hii da",
      unreadMessageCount: "5",
      previousMessages: [
        {
          sender_id: 2,
          receiver_id: 1,
          message: "hlooo",
          timestamp: 12,
        },
        {
          sender_id: 2,
          receiver_id: 1,
          message: "hiiii",
          timestamp: 13,
        },
        {
          sender_id: 1,
          receiver_id: 2,
          message: "sender",
          timestamp: 17,
        },
        {
          sender_id: 2,
          receiver_id: 1,
          message: "sender",
          timestamp: 17,
        },
        {
          sender_id: 1,
          receiver_id: 2,
          message: "sender",
          timestamp: 17,
        },
      ],
    },
  ];
  const gobackBtn = () => {
    setConversationData([]);
  };

  return (
    <>
      <div className="community-container">
        <div
          className={
            conversationData.length === 0
              ? "community-left-side"
              : "community-left-side-block"
          }
        >
          <div className="create-community">
            <div className="goback-home-btn">
              
              <img src={homelogo} alt="home" />
              <p>Go home</p>
            </div>
            <div className="community-create-community-btn">
              <Button
                bColor="green"
                height="3rem"
                name="&nbsp; Create new Community &nbsp;"
                width="100%"
              />
            </div>

            <div className="community-people-search">
              <InputBox
                height="2rem"
                name="search"
                placeHolder="search people"
                type="text"
                value={""}
                width="75%"
              />
              <Button bColor="blue" height="2rem" name="Search" width="25%" />
            </div>
            <div className="show-community-chats">
              {arr.map((val, i) => (
                <ChatBox
                  lastMessage={val.lastMessage}
                  lastMsgTime={val.lastMessageTime}
                  name={val.name}
                  id={val.id}
                  idPicker={conversationSetter}
                  key={i}
                />
              ))}
              {/* <ChatBox/> */}
            </div>
          </div>
        </div>
        <div
          className={
            conversationData.length !== 0
              ? "community-right-side"
              : "community-right-side-block"
          }
        >
          <ConversationBox data={conversationData} gobackBtn={gobackBtn} />
        </div>
      </div>
    </>
  );
};

export default CommunityMainPage;
