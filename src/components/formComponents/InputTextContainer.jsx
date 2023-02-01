import Notification from "../alerts/Notification";
import "./css/form.css";
const InputTextContainer = ({
  label,
  type,
  register,
  error,
  placeholder,
  disable,
}) => {
  return (
    <div className="container-InputLabel">
      <div className="container-body">
        <label>{label}:</label>
        <input
          type={type}
          {...register}
          placeholder={placeholder}
          disabled={disable ? disable : false}
        />
      </div>
      {error && <Notification message={error} />}
    </div>
  );
};

export default InputTextContainer;
