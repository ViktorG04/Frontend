import InputTextContainer from "../formComponents/InputTextContainer";
import { nameRegister, emailRegister } from "./functionality/userRegister";

const NameEmailForm = ({ register, errors, disable }) => {
  return (
    <>
      <InputTextContainer
        label="Full Name"
        type="text"
        register={nameRegister(register)}
        error={errors.name?.message}
        disable={disable}
      />
      <InputTextContainer
        label="Email Address"
        type="text"
        register={emailRegister(register)}
        error={errors.email?.message}
        disable={disable}
      />
    </>
  );
};

export default NameEmailForm;
