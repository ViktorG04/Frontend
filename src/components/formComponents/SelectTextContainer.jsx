import React from "react";

const SelectTextContainer = ({label, list, register}) => {
  return (
    <div>
      <label>{label}</label>
      <select {...register}>
        {list.map((item) => (
          <option value={item.id} key={item.id}>
            {item.type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectTextContainer;
