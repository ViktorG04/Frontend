import React from "react";
import "./css/divisa.css";
const Select = ({ label, listSelect, register }) => {
  return (
    <div className="select-conversion">
      <label>{label}:</label>
      <select {...register}>
        {listSelect.map((option, index) => (
          <option value={option.name} key={`select-${index}`}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
