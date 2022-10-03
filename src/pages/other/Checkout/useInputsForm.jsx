import React, { useEffect, useState } from "react";

const useInputsForm = (stateArray, options) => {
  const stateArray2 = useState();
  useEffect(() => {
    console.log("default", options?.defaultValue);
    options?.defaultValue && stateArray2[1](options.defaultValue);
  }, []);
  const handleChange = (event) => {
    stateArray
      ? stateArray[1]((prevState) => {
          return {
            ...prevState,
            [event.target.name]: event.target.value,
          };
        })
      : stateArray2[1]((prevState) => {
          return {
            ...prevState,
            [event.target.name]: event.target.value,
          };
        });
    console.log(stateArray2[0]);
    // eslint-disable-next-line no-unused-expressions
    options && options?.onChange && options?.onChange(event);
  };

  const customInput = ({
    inputType = "input",
    type = "text",

    title,
    name,
    listArray,
    subTitle,
    placeholder,
    inputArray,
    error,
    required,
  }) => {
    if (listArray) {
      inputType = "dropDown";
    }
    if (inputArray) {
      console.log(inputArray);
      inputType = "inputArray";
    }
    let Component;

    const InputComponent = (
      <div className="billing-info mb-20">
        <label>
          {title}
          {required ? <span style={{ color: "red" }}> *</span> : <></>}
        </label>
        {options?.errors && options?.errors?.[name] && (
          <label style={{ color: "grey", marginLeft: "5px" }}>
            {options?.errors[name]}
          </label>
        )}
        <input
          type={type}
          value={stateArray?.[0]?.[name] || stateArray2?.[0]?.[name]}
          name={name && name}
          onChange={handleChange}
          placeholder={placeholder && placeholder}
          error={options?.errors?.[name]}
          style={
            Boolean(options?.errors?.[name]) ? { border: "1px solid red" } : {}
          }
        />
      </div>
    );

    switch (inputType) {
      case "input":
        Component = InputComponent;

        break;

      case "dropDown":
        Component = (
          <div className="billing-select mb-20">
            <label>{title && title}</label>
            <select
              name={name && name}
              onChange={handleChange}
              value={stateArray?.[0]?.[name] || stateArray?.[0]?.[name]}
            >
              {listArray &&
                listArray.map(({ text, value }, index) => (
                  <option value={value} key={value}>
                    {text && text}
                  </option>
                ))}
            </select>
          </div>
        );
        break;
      case "textArea":
        Component = (
          <div className="additional-info-wrap">
            <h4>{title}</h4>
            <div className="additional-info">
              <label>{subTitle}</label>
              <textarea
                name={name}
                defaultValue={""}
                value={stateArray?.[0]?.[name] || stateArray?.[0]?.[name]}
                placeholder={placeholder}
                onChange={handleChange}
              />
            </div>
          </div>
        );
        break;

      case "inputArray":
        Component = (
          <div className="billing-info mb-20">
            <label>{title}</label>
            {inputArray?.map(({ name, placeholder }) => (
              <input
                key={name}
                className="billing-address"
                placeholder={placeholder && placeholder}
                type="text"
                value={stateArray?.[0]?.[name] || stateArray?.[0]?.[name]}
                name={name && name}
                onChange={handleChange}
              />
            ))}
          </div>
        );
        break;

      default:
        Component = InputComponent;

        break;
    }

    return <div className={"billing-info-wrap"}>{Component}</div>;
  };
  return {
    state: stateArray?.[0] || stateArray2?.[0],
    handleChange,
    customInput,
  };
};

export default useInputsForm;
