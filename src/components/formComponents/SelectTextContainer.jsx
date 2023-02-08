import React from "react";
import "./css/form.css";
const SelectTextContainer = ({ label, listSelect, register, className }) => {
  return (
    <div className={className}>
      <label>{label}:</label>
      <select {...register}>
        {listSelect.map((option, index) => (
          <option value={option.id} key={`select-${index}`}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectTextContainer;
