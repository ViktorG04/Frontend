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
        onKeyDown={
          type === "number"
            ? (evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
            : null
        }
        step={type === "number" ? "0.01" : null}
      />
      <label>{label}:</label>
      {error && <Notification message={error} />}
    </div>
  );
};

export default InputTextContainer;
