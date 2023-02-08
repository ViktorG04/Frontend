import Notification from "../alerts/Notification";
import "./css/form.css";
const TextareaContainer = ({ label, register, error, className }) => {
  return (
    <div className={className}>
      <label>{label}:</label>
      <textarea type="text" {...register} placeholder=" " cols={4} rows={4} maxLength={100} />
      {error && <Notification message={error} />}
    </div>
  );
};

export default TextareaContainer;
