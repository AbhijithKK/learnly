import { FunctionComponent } from "react";
import { ButtonInterface } from "../../Utils/Interfaces";
import "./Button.css";

const Button:FunctionComponent<ButtonInterface> = ({ height, width, bColor, BtnClick,name }) => {
  return (
    <>
      <button
        className="btn"
        type="button"
        onClick={BtnClick}
        style={{
          height: height,
          width: width,
          backgroundColor: bColor,
        }}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
