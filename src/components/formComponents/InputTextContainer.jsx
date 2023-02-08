import Notification from "../alerts/Notification";
import "./css/form.css";
const InputTextContainer = ({ label, type, register, error, placeholder, disable }) => {
  return (
    <div className="container-InputLabel">
      <input
        type={type}
        {...register}
        placeholder={placeholder ? placeholder : " "}
        disabled={disable ? disable : false}
      />
      <label>{label}:</label>
      {error && <Notification message={error} />}
    </div>
  );
};

export default InputTextContainer;
