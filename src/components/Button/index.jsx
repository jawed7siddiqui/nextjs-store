import React from "react";

const Button = ({
  buttonType = "default",
  onClick,
  disabled,
  text,
  name,
  type,
}) => {
  let Component;
  switch (buttonType) {
    case "default":
      Component = (
        <button
          onClick={onClick}
          disabled={disabled}
          type={type}
          style={
            disabled
              ? {
                  padding: "8px 20px",
                  backgroundColor: "#ababab",
                  color: "#777777",
                  cursor: "default",
                  border: "none",
                }
              : { padding: "8px 20px" }
          }
          name={name}
        >
          {text}
        </button>
      );
      break;
  }
  return Component;
};

export default Button;
