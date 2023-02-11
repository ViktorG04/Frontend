import useRegisterUser from "../../hooks/useRegisterUser";
import InputPassword from "../formComponents/InputPassword";

const PasswordForm = ({ register, errors, getValues, labelPassword }) => {
  const { passwordRegister, confirmPasswordRegister } = useRegisterUser({
    register,
  });

  return (
    <>
      <InputPassword
        label={labelPassword}
        register={passwordRegister()}
        error={errors.password?.message}
      />
      <InputPassword
        label="Confirm Password"
        register={confirmPasswordRegister(getValues)}
        error={errors.confirmPassword?.message}
      />
    </>
  );
};

export default PasswordForm;
