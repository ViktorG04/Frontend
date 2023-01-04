import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import withControlledForm from "../hoc/withControlledForm";
import InputTextContainer from "../components/formComponents/InputTextContainer";
import Button from "../components/formComponents/button/Button";
import { emailRegister, passwordRegister } from "../components/user/functionality/userRegister";
import { SignUp } from "../features/user/actions";
import "./css/login.css";

const Login = ({ formProps }) => {
  const { register, handleSubmit, errors, navigate } = formProps;
  const { isLogged, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onHandleSubmit = (data) => {
    const action = SignUp(data);
    dispatch(action);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (isLogged) {
      toast.success("Welcome");
      navigate("/dashboard");
    }
  }, [isLogged, error]);

  return (
    <div className="container-login">
      <h1>LOGIN</h1>
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

        <Button type="submit" name="Log In" />
      </form>
      <a href="#">Lost your Password?</a>
      <br />
      <a href="/register">Don't have An account?</a>
    </div>
  );
};

export const LoginFormWithControlled = withControlledForm(Login, "/register");
