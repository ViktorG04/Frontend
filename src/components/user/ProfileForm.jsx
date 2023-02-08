import React from "react";
import { useForm } from "react-hook-form";
import PasswordForm from "./PasswordForm";
import InputTextContainer from "../formComponents/InputTextContainer";
import GridButtonForm from "../formComponents/button/GridButtonForm";
import useFormProfile from "../../hooks/useFormProfile";
import useRegisterUser from "../../hooks/useRegisterUser";
import "./css/userForm.css";

const defaultValues = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
};

const ProfileForm = ({ setOpen }) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const { passwordValidate } = useRegisterUser({ register });

  const { password, onHandleSubmit, handleClick } = useFormProfile(setOpen, reset);

  return (
    <div className="container-form-profile">
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <InputTextContainer
          label="Current Password"
          type="password"
          register={passwordValidate(password)}
          error={errors.currentPassword?.message}
        />
        <PasswordForm
          register={register}
          errors={errors}
          getValues={getValues}
          labelPassword="New Password"
        />
        <GridButtonForm onClick={handleClick} nameButtonSubmit="Update" />
      </form>
    </div>
  );
};

export default ProfileForm;
