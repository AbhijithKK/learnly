import { FunctionComponent } from "react";
import { InputBoxInterface } from "../../Utils/Interfaces";
import "./InputBox.css";

const InputBox:FunctionComponent<InputBoxInterface> = ({type, placeHolder, height, width, onChangeValue,name,value} ) => {
  return (
    <>
      <input
        className="in-box"
        type={type}
        placeholder={placeHolder}
        onChange={(e) => onChangeValue(e)}
        style={{
          height: height,
          width: width,
        }}
        name={name}
        required
        value={value}
      />
    </>
  );
};

export default InputBox;
