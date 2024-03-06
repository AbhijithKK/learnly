import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import ChatBox from "./ChatBox";
import "./Community.css";
import ConversationBox from "./ConversationBox";
const CommunityMainPage = () => {
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
            <div className="show-community-chats">
                <ChatBox/>
                <ChatBox/>
            </div>
          </div>
        </div>
        <div className="community-right-side">
            <ConversationBox/>
            </div>
        </div>
     
    </>
  );
};

export default CommunityMainPage;
