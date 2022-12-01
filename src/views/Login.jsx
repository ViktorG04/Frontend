import React, { useContext } from "react";
import { encrypt } from "../utils/encrypt-decrypt";
import toast, { Toaster } from "react-hot-toast";
import UserContext from "../context/UserContext";
import withControlledForm from "../hooks/withControlledForm";
import InputTextContainer from "../components/formComponents/InputTextContainer";
import Button from "../components/formComponents/Button";
import {  userRegister, passwordRegister } from "../config/configFields";


const Login = ({hookFormProps}) => {
    
  const {register, handleSubmit, errors, handleClick, navigate} = hookFormProps;

  const userState = useContext(UserContext);

  //communication with api
  const onHandleSubmit = (data) => {
    const { user, password } = data;
    if (user !== "user" && password !== "12341234") {
      return toast.error("Wrong Username or password");
    }
    data.id = 1;
    console.log(data)
    toast.success('Welcome')
    userState.setUserLogin(encrypt(JSON.stringify(data)));
    navigate("/dashboard");
  };

  return (
    <div className="container-login">
      <div>
        <Toaster />
      </div>
      <h2>LOGIN</h2>
      <p>logo</p>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <InputTextContainer
          label="User"
          type="text"
          register={userRegister(register)}
          error={errors.user?.message}
        />
        <InputTextContainer
          label="Password"
          type="password"
          register={passwordRegister(register)}
          error={errors.password?.message}
        />
        <div>
            <Button type='submit' name='Enter'/>
            <Button type='reset' name='Register' onClick={handleClick}/>
        </div>
      </form>
    </div>
  );
};

export const LoginFormWithControlled = withControlledForm(Login, "/register");