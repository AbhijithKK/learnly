import { ButtonInterface } from "../../Utils/Interfaces";
import "./Button.css";

const Button = ({ height, width, bColor, BtnClick }: ButtonInterface) => {
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
        button
      </button>
    </>
  );
};

export default Button;
