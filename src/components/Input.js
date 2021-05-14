import "./Input.scss";
import Icon from "./Icon";
import { useState } from "react";

const Input = ({
  error = false,
  pseudofocus = false,
  pseudohover = false,
  disabled = false,
  label = "Label",
  helperText = "",
  startIcon = "",
  endIcon = "",
  value = "",
  size = "md",
  fullWidth,
  multiline,
  row = 1,
}) => {
  let [isFocused, setFocus] = useState(pseudofocus);
  let [isHovered, setHover] = useState(pseudohover);
  let [text, setText] = useState(value);

  let Error = error ? "error" : "default";
  let Hover = isHovered ? "hover" : "";
  let Focus = isFocused ? "focus" : "";
  let Disabled = disabled ? "disabled" : "";
  let FullWidth = fullWidth ? "FullWidth" : "";
  let Multiline = multiline ? "Multiline" : "";
  let Size = multiline ? " " : size;

  const InputClasses = ["Input", FullWidth, Multiline].join(" ");
  const LabelClasses = ["Label", Error, Focus, Hover].join(" ");
  const InputContainerClasses = [
    "InputContainer",
    Error,
    Hover,
    Focus,
    Disabled,
    Size,
    Multiline,
    FullWidth,
  ].join(" ");

  const changeValue = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={InputClasses}>
      <div className={LabelClasses}>{label}</div>
      <div className={InputContainerClasses}>
        {startIcon && (
          <div className="StartIcon">
            <Icon iconName={startIcon}></Icon>
          </div>
        )}
        {multiline && (
          <textarea
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(false);
            }}
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseOut={() => {
              setHover(false);
            }}
            onMouseLeave={() => setHover(false)}
            placeholder="Placeholder"
            disabled={Disabled}
            value={text}
            onChange={changeValue}
            rows={row}
          ></textarea>
        )}
        {!multiline && (
          <input
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(false);
            }}
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseOut={() => {
              setHover(false);
            }}
            placeholder="Placeholder"
            disabled={Disabled}
            value={text}
            onChange={changeValue}
          ></input>
        )}

        {endIcon && (
          <div className="EndIcon">
            <Icon iconName={endIcon} className="EndIcon"></Icon>
          </div>
        )}
      </div>
      {helperText && (
        <div className={"HelperText" + " " + Error}>{helperText}</div>
      )}
    </div>
  );
};

export default Input;
