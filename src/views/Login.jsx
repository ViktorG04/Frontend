import { useForm } from "react-hook-form";
import useFormLogin from "../hooks/useFormLogin";
import InputTextContainer from "../components/formComponents/InputTextContainer";
import GridButtonForm from "../components/formComponents/button/GridButtonForm";
import { emailRegister, passwordRegister } from "../components/user/functionality/userRegister";

import "./css/login.css";

const defaultValues = {
  email: "",
  password: "",
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });

  const { onHandleSubmit } = useFormLogin();

  const onHandleClick = () => {
    reset(defaultValues);
  };

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
        <GridButtonForm onClick={onHandleClick} nameButtonSubmit="Log In" />
      </form>
      <a href="#">Lost your Password?</a>
      <br />
      <a href="/register">Don't have An account?</a>
    </div>
  );
};

export default Login;
