import InputTextContainer from "../formComponents/InputTextContainer";
import useRegisterUser from "../../hooks/useRegisterUser";

const NameEmailForm = ({ register, errors, disable }) => {
  const { nameRegister, emailRegister } = useRegisterUser({ register });
  return (
    <>
      <InputTextContainer
        label="Full Name"
        type="text"
        register={nameRegister()}
        error={errors.name?.message}
        disable={disable}
      />
      <InputTextContainer
        label="Email Address"
        type="text"
        register={emailRegister()}
        error={errors.email?.message}
        disable={disable}
      />
    </>
  );
};

export default NameEmailForm;
