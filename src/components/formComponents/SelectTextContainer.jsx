import React from "react";
import "./css/form.css";
const SelectTextContainer = ({ label, listSelect, register }) => {
  return (
    <div className="select-container">
      <label>{label}:</label>
      <select {...register}>
        {listSelect.map((option) => (
          <option value={option.id} key={option.id}>
            {option.type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectTextContainer;
