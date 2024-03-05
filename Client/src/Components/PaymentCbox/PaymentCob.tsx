import React from "react";

import { CboxInterface } from "../../Utils/Interfaces";
import dummyimg from "../../assets/dummycource.png";
import "../../Components/CourseBox/Cbox.css";

const PaymentCbox = ({
  image,
  hedding,
  // discription,
  lesson,
  payment,
}: CboxInterface) => {
  return (
    <div
      className="cb-container payment-cb-container"
    
    >
      <div className="cb-image cb-img-payment">
        <img
          src={image ? image : dummyimg}
          alt="imagess"
      
        />
      </div>
      <div className="cb-text-main">
        <h2 className="cb-headding payment-cb-hedding" >{hedding}</h2>
        {/* <p className="cb-discription">{discription}</p> */}
        <div className="cb-prize">
          <p>{lesson}</p>
          <p>₹{payment}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentCbox;
