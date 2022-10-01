import React, { useState } from "react";

const useInputsForm = (stateArray) => {
  const stateArray2 = useState();
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
  };

  const customInput = ({
    type = "input",
    title,
    name,
    listArray,
    subTitle,
    placeholder,
    inputArray,
  }) => {
    if (listArray) {
      type = "dropDown";
    }
    if (inputArray) {
      console.log(inputArray);
      type = "inputArray";
    }
    let Component;

    switch (type) {
      case "input":
        Component = (
          <div className="billing-info mb-20">
            <label>{title}</label>
            <input
              type="text"
              value={stateArray?.[0]?.[name] || stateArray?.[0]?.[name]}
              name={name && name}
              onChange={handleChange}
              placeholder={placeholder && placeholder}
            />
          </div>
        );

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
        Component = (
          <div className="billing-info mb-20">
            <label>{title}</label>
            <input
              type="text"
              value={stateArray?.[0]?.[name] || stateArray?.[0]?.[name]}
              name={name && name}
              onChange={handleChange}
              placeholder={placeholder && placeholder}
            />
          </div>
        );

        break;
    }

    return Component;
  };
  return {
    state: stateArray?.[0] || stateArray2?.[0],
    handleChange,
    customInput,
  };
};

export default useInputsForm;
