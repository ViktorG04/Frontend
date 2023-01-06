import React from "react";
import { useForm } from "react-hook-form";
import PasswordForm from "./PasswordForm";
import InputTextContainer from "../formComponents/InputTextContainer";
import { passwordValidate } from "./functionality/userRegister";
import "./css/userForm.css";
import GridButtonForm from "../formComponents/button/GridButtonForm";

const defaultValues = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
};

const ProfileForm = ({ onHandleSubmit, setOpen, password }) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleClick = () => {
    setOpen(false);
    reset(defaultValues);
  };

  return (
    <div className="container-form-profile">
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <InputTextContainer
          label="Current Password"
          type="password"
          register={passwordValidate(register, password)}
          error={errors.currentPassword?.message}
        />
        <PasswordForm register={register} errors={errors} getValues={getValues} />
        <GridButtonForm onClick={handleClick} nameButtonSubmit="Update" />
      </form>
    </div>
  );
};

export default ProfileForm;
