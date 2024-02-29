import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";
import icon from "../../assets/icons8-edit-image-24.png";
import "./ProfilePage.css";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
const ProfilePage = () => {
  const [state, setstate] = useState<any>("");
  const [isOpen, setIsopen] = useState<boolean>(false);
  function btn() {}
  function modalClose() {

    setIsopen(!isOpen)
  }
  const modal = (
    <>
      <div className="modal-hedding">Change Password</div>
      <div className="modal-content-pro-page">
        <div className="inputbox-modal-password">
          <InputBox
            height="2rem"
            name="currentPassword"
            placeHolder="Current password"
            type="password"
            width="60%"
          />
        </div>
        <div className="inputbox-modal-password">
          <InputBox
            height="2rem"
            name="newPassword"
            placeHolder="New password"
            type="password"
            width="60%"
          />
        </div>
        <div className="inputbox-modal-password">
          <Button
            bColor="blue"
            height="2rem"
            name="Update"
            width="4rem"
            BtnClick={btn}
          />
        </div>
      </div>
    </>
  );
  return (
    <>
      <Navbar />
      <div className="profile-main">
        <div className="profile-left-side">
          <div className="pro-hedding">My Profile</div>
          <div className="pro-propic">
            <img src="" alt="" />
          </div>
          <div className="pro-owner-name">abcdd</div>
          <div className="edit-propic">
            <div className="pro-edit-icon">
              <InputBox
                height="20px"
                name="file1"
                placeHolder="file"
                type="file"
                value=""
                width="5rem"
                onChangeValue={(e) => setstate(e)}
              />
            </div>
            <img src={icon} alt="" />
          </div>
          <div className="pro-password-btn">
            <Button
              BtnClick={modalClose}
              bColor="black"
              width="10rem"
              height="1.5rem"
              name="Change Password"
            />
          </div>
        </div>
        <div className="profile-center">
          <div className="pro-sub-content">
            <div className="pro-account-settings-text">Account Settings</div>
            <div className="pro-contain-2-inputbox">
              <div className="pro-input-box-name">
                <label htmlFor="">First Name</label>
                <InputBox
                  height="2.2rem"
                  name="firstName"
                  placeHolder="firstName"
                  type="text"
                  value="abcdd"
                  width="14rem"
                  onChangeValue={(e) => setstate(e)}
                />
              </div>
              <div className="pro-input-box-name">
                <label htmlFor="">Last Name</label>
                <InputBox
                  height="2.2rem"
                  name="lastName"
                  placeHolder="last name"
                  type="text"
                  value="abcdd"
                  width="14rem"
                  onChangeValue={(e) => setstate(e)}
                />
              </div>
            </div>
            <div className="pro-contain-2-inputbox">
              <div className="pro-input-box-name">
                <label htmlFor="">Email</label>
                <InputBox
                  height="2.2rem"
                  name="email"
                  placeHolder="email"
                  type="email"
                  value="abcdd"
                  width="14rem"
                  onChangeValue={(e) => setstate(e)}
                />
              </div>
              <div className="pro-input-box-name">
                <label htmlFor="">Phone</label>
                <InputBox
                  height="2.2rem"
                  name="phone"
                  placeHolder="phone"
                  type="text"
                  value="12558455"
                  width="14rem"
                  onChangeValue={(e) => setstate(e)}
                />
              </div>
            </div>

            <div className="pro-contain-2-inputbox">
              <div className="pro-btnn">
                <Button
                  bColor="blue"
                  height="2.2rem"
                  name="Update"
                  width="5rem"
                  BtnClick={btn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pro-footer">
        <Footer />
      </div>
      {
        isOpen&&
      <Modal html={modal} closeFunc={modalClose} />
      }
    </>
  );
};

export default ProfilePage;
