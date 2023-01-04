import InputTextContainer from "../formComponents/InputTextContainer";
import {
  passwordRegister,
  confirmPasswordRegister,
} from "./functionality/userRegister";

const PasswordForm = ({ register, errors, getValues }) => {
  return (
    <>
      <InputTextContainer
        label="Password"
        type="password"
        register={passwordRegister(register)}
        error={errors.password?.message}
      />
      <InputTextContainer
        label="Confirm Password"
        type="password"
        register={confirmPasswordRegister(register, getValues)}
        error={errors.confirmPassword?.message}
      />
    </>
  );
};

export default PasswordForm;
