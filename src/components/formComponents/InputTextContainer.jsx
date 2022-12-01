import Notification from "../alerts/Notification";

const InputTextContainer = ({ label, type, register, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={`${type}`} {...register}/>
      {error && <Notification error={error}/>}
    </div>
  );
};

export default InputTextContainer;
