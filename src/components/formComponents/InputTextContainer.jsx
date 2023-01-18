import Notification from "../alerts/Notification";
import "./css/form.css";
const InputTextContainer = ({ label, type, register, error, disable = false }) => {
  return (
    <div className="container-InputLabel">
      <div className="container-body">
        <label>{label}:</label>
        <input type={type} {...register} disabled={disable} />
      </div>
      {error && <Notification message={error} />}
    </div>
  );
};

export default InputTextContainer;
