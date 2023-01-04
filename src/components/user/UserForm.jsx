import withControlledFormUser from "../../hoc/withControlledFormUser";
import InputTextContainer from "../formComponents/InputTextContainer";
import Button from "../formComponents/button/Button";
import { nameRegister, emailRegister } from "./functionality/userRegister";
import PasswordForm from "./PasswordForm";

import "./css/userForm.css";
import GridButton from "../formComponents/button/GridButton";

const UserForm = ({ formProps }) => {
  const { register, handleSubmit, getValues, errors, handleClick, config } = formProps;
  const {
    buttonSubmitName,
    formName,
    inputNameDisable,
    inputEmailDisable,
    onHandleSubmit,
    disable,
  } = config;
  return (
    <div className="container-form-user">
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
          disable={inputEmailDisable}
        />
        {disable ? (
          <PasswordForm register={register} errors={errors} getValues={getValues} />
        ) : (
          "button"
        )}

        <GridButton>
          <Button type="reset" onClick={handleClick} name="Cancel" />
          <Button type="submit" name={buttonSubmitName} />
        </GridButton>
      </form>
    </div>
  );
};

export const UserFormWithControlled = withControlledFormUser(UserForm);
