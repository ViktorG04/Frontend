import Notification from "../alerts/Notification";

const InputTextContainer = ({ label, type, register, error, disable = false}) => {
  return (
    <div>
      <label>{label}</label>
      <input type={`${type}`} {...register} disabled={disable}/>
      {error && <Notification error={error}/>}
    </div>
  );
};

export default InputTextContainer;
