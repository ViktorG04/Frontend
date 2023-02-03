import React from "react";
import Notification from "../alerts/Notification";
const SimpleInput = ({ label, type, register, error, disable }) => {
  return (
    <div>
      <div>
        <label>{label}</label>
        <input type={type} {...register} disabled={disable ? disable : false} />
      </div>
      {error && <Notification message={error} />}
    </div>
  );
};

export default SimpleInput;
