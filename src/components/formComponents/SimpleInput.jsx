import React from "react";
import Notification from "../alerts/Notification";
import "./css/form.css";
const SimpleInput = ({
  label,
  type,
  register,
  error,
  disable,
  placeholder,
  className,
  value,
  margin,
}) => {
  return (
    <div className="container-input">
      <div className={className}>
        <label style={{ marginRight: margin }}>{label ? label + ":" : null}</label>
        {value ? (
          <input value={value} disabled={disable} />
        ) : (
          <input
            type={type}
            {...register}
            disabled={disable ? disable : false}
            placeholder={placeholder}
          />
        )}
      </div>
      <div className="error">{error && <Notification message={error} />}</div>
    </div>
  );
};

export default SimpleInput;
