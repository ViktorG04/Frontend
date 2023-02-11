import React, { useState } from "react";
import Notification from "../alerts/Notification";

const InputPassword = ({ label, register, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container-InputLabel">
      <input type={showPassword ? "text" : "password"} {...register} placeholder=" " />
      <label>{label}:</label>
      {showPassword ? (
        <i className="fas fa-eye" onClick={() => setShowPassword(false)} />
      ) : (
        <i className="fas fa-eye-slash" onClick={() => setShowPassword(true)} />
      )}
      {error && <Notification message={error} />}
    </div>
  );
};

export default InputPassword;
