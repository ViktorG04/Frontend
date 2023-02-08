import InputTextContainer from "../formComponents/InputTextContainer";
import useRegisterUser from "../../hooks/useRegisterUser";

const PasswordForm = ({ register, errors, getValues, labelPassword }) => {
  const { passwordRegister, confirmPasswordRegister } = useRegisterUser({
    register,
  });

  return (
    <>
      <InputTextContainer
        label={labelPassword}
        type="password"
        register={passwordRegister()}
        error={errors.password?.message}
      />
      <InputTextContainer
        label="Confirm Password"
        type="password"
        register={confirmPasswordRegister(getValues)}
        error={errors.confirmPassword?.message}
      />
    </>
  );
};

export default PasswordForm;
