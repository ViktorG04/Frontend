import React from "react";

const InputCheckBox = ({ label, checked, disabled, onHandleClick }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onHandleClick(event)}
      />
    </div>
  );
};

export default InputCheckBox;
