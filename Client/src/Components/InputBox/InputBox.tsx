import { FunctionComponent } from "react";
import { InputBoxInterface } from "../../Utils/Interfaces";
import "./InputBox.css";

const InputBox:FunctionComponent<InputBoxInterface> = ({type, placeHolder, height, width, onChangeValue} ) => {
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
        required
      />
    </>
  );
};

export default InputBox;
