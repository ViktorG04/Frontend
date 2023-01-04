import Notification from "../alerts/Notification";

const TextareaContainer = ({ label, register, error }) => {
  return (
    <>
      <label>{label}</label>
      <textarea type="text" {...register} />
      {error && <Notification error={error} />}
    </>
  );
};

export default TextareaContainer;
