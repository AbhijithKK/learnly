import { InputBoxInterface } from "../../Utils/Interfaces";
import "./InputBox.css";

const InputBox = ({ type, placeHolder, height, width, onChangeValue }:InputBoxInterface) => {
  return (
    <>
      <input
        className="in-box"
        type={type}
        placeholder={placeHolder}
        onChange={(e) => onChangeValue(e.target.value)}
        style={{
          height: height,
          width: width,
        }}
      />
    </>
  );
};

export default InputBox;
