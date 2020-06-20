import React from "react";

const CustomInput = ({ type, ...rest }) => {
  return (
    <div class="field">
      <div class="control">
        <input class="input" type={type} {...rest} />
      </div>
    </div>
  );
};

export default CustomInput;
