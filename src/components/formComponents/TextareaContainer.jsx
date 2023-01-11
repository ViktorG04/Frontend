import Notification from "../alerts/Notification";

const TextareaContainer = ({ label, register, error }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea type="text" {...register} />
      {error && <Notification error={error} />}
    </div>
  );
};

export default TextareaContainer;
