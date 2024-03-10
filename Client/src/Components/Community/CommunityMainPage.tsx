import { useState } from "react";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import ChatBox from "./ChatBox";
import "./Community.css";
import ConversationBox from "./ConversationBox";
const CommunityMainPage = () => {
    const [conversationData,setConversationData]=useState<any>([])
    const conversationSetter=(id)=> {
        const data=arr.find((val)=>val.id==id)
setConversationData(data)        
    }
    let arr:any=[{
        id:1,
        image:null,
    name:'abhiram',
    lastMessageTime:'yesterday',
    lastMessage:'hii da',
    unreadMessageCount:'1',
    previousMessages:[
        {
            sender_id:2,
            receiver_id:1,
            message:'hlooo',
            timestamp:12
        },
        {
            sender_id:2,
            receiver_id:1,
            message:'hiiii',
            timestamp:13

        },
        {
            sender_id:1,
            receiver_id:2,
            message:'sender',
            timestamp:17

        },
        {
            sender_id:2,
            receiver_id:1,
            message:'sender',
            timestamp:17

        },
        {
            sender_id:1,
            receiver_id:2,
            message:'sender',
            timestamp:17

        },
    ]
    
    }]
    
    
  return (
    <>
      <div className="community-container">
        <div className="community-left-side">
          <div className="create-community">
            <Button
              bColor="green"
              height="3rem"
              name="Create new Community"
              width="100%"
            />
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
            <div  className="show-community-chats">
                {
                    arr.map((val,i)=>(

                        <ChatBox lastMessage={val.lastMessage} 
                        lastMsgTime={val.lastMessageTime} 
                        name={val.name}
                        id={val.id}
                        idPicker={conversationSetter}
                        key={i}
                        />
                    ))
                }
                {/* <ChatBox/> */}
            </div>
          </div>
        </div>
        <div className="community-right-side">
           
<ConversationBox data={conversationData}  />
              
            </div>
        </div>
     
    </>
  );
};

export default CommunityMainPage;
