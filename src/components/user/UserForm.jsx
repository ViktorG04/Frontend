import withControlledFormUser from "../../hooks/withControlledFormUser";
import InputTextContainer from "../formComponents/InputTextContainer";
import Button from "../formComponents/Button";
import {
  nameRegister,
  emailRegister,
  passwordRegister,
  confirmPasswordRegister,
} from "./functionality/userRegister";

const UserForm = ({ formProps }) => {
  const { register, handleSubmit, getValues, errors, handleClick, config } = formProps;
  const { buttonSubmitName, formName, inputNameDisable, onHandleSubmit, Toaster } = config;
  return (
    <div>
      <div>
        <Toaster />
      </div>
      <h2>{formName}</h2>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <InputTextContainer
          label="Full Name"
          type="text"
          register={nameRegister(register)}
          error={errors.name?.message}
          disable={inputNameDisable}
        />
        <InputTextContainer
          label="Email Address"
          type="text"
          register={emailRegister(register)}
          error={errors.email?.message}
        />
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
        <div>
          <Button type="reset" onClick={handleClick} name="Cancel" />
          <Button type="submit" name={buttonSubmitName} />
        </div>
      </form>
    </div>
  );
};

export const UserFormWithControlled = withControlledFormUser(UserForm)