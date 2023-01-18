import Notification from "../alerts/Notification";
import "./css/form.css";
const TextareaContainer = ({ label, register, error }) => {
  return (
    <div className="container-textarea">
      <div className="container-body">
        <label>{label}:</label>
        <textarea type="text" {...register} />
      </div>
      {error && <Notification message={error} />}
    </div>
  );
};

export default TextareaContainer;
