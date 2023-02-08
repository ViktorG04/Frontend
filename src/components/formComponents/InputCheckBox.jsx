import React from "react";
import "./css/form.css";
const InputCheckBox = ({ label, checked, disabled, onHandleClick }) => {
  return (
    <div className="container-checkbox">
      <label>{label}:</label>
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
