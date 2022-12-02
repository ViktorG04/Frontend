import React from "react";
import toast, { Toaster } from "react-hot-toast";
import withControlledForm from "../hooks/withControlledForm";
import InputTextContainer from "../components/formComponents/InputTextContainer";
import Button from "../components/formComponents/Button";
import { nameRegister, emailRegister, passwordRegister, confirmPasswordRegister } from "../config/configFields";

const Register = ({formProps}) => {

  const {register, handleSubmit, errors, handleClick } = formProps;

  const onHandleSubmit = (data) => {

    const { password, confirmPassword, ...user } = data;

    if (password !== confirmPassword) {
     return toast.error("The passwords are not the same");
    } 
      user.password = password;
      console.log(user);
      toast.success("created Account");
  };

  return (
    <div className="container-Register">
      <div>
        <Toaster />
      </div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onHandleSubmit)}>

        <InputTextContainer 
         label="Full Name"
         type="text"
         register={nameRegister(register)}
         error={errors.name?.message}
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
        register={confirmPasswordRegister(register)}
        error={errors.confirmPassword?.message}
        />
        <div>
          <Button type='reset' onClick={handleClick} name="Cancel"/>
          <Button type='submit' name='Enter'/>
        </div>
      </form>
    </div>
  );
};

export const RegisterFormWithControlled = withControlledForm(Register, "/");