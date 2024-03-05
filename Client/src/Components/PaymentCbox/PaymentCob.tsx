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
      className="cb-container"
      style={{
        boxShadow: "0px 0px 0px",
        width: "90%",
      }}
    >
      <div className="cb-image cb-img-payment">
        <img
          src={image ? image : dummyimg}
          alt="imagess"
          style={{
            height: "8rem",
            width: "14rem",
          }}
        />
      </div>
      <div className="cb-text-main">
        <h2 className="cb-headding" style={{
            paddingBottom:" 1.9rem"

        }}>{hedding}</h2>
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
