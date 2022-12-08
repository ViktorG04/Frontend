import React, { useContext } from "react";
import { encrypt } from "../utils/encrypt-decrypt";
import toast, { Toaster } from "react-hot-toast";
import UserContext from "../context/UserContext";
import withControlledForm from "../hooks/withControlledForm";
import InputTextContainer from "../components/formComponents/InputTextContainer";
import Button from "../components/formComponents/Button";
import {  emailRegister, passwordRegister } from "../components/user/functionality/userRegister";

//test data
import {userContext} from "../data"

const Login = ({formProps}) => {
    
  const {register, handleSubmit, errors, handleClick, navigate} = formProps;

  const userState = useContext(UserContext);

  //communication with api
  const onHandleSubmit = (data) => {
    const { email, password } = data;
    if (email !== "user@user.com" && password !== "12341234") {
      return toast.error("Wrong Username or password");
    }
   
    toast.success('Welcome')
    userState.setUserLogin(encrypt(JSON.stringify(userContext)));
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
          label="Email"
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
        <div>
            <Button type='submit' name='Enter'/>
            <Button type='reset' name='Register' onClick={handleClick}/>
        </div>
      </form>
    </div>
  );
};

export const LoginFormWithControlled = withControlledForm(Login, "/register");