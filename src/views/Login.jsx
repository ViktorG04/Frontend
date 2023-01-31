import { useForm } from "react-hook-form";
import useFormLogin from "../hooks/useFormLogin";
import InputTextContainer from "../components/formComponents/InputTextContainer";
import GridButtonForm from "../components/formComponents/button/GridButtonForm";
import useRegisterUser from "../hooks/useRegisterUser";
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

  const { emailRegister, passwordRegister } = useRegisterUser({ register });

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
          register={emailRegister()}
          error={errors.email?.message}
        />
        <InputTextContainer
          label="Password"
          type="password"
          register={passwordRegister()}
          error={errors.password?.message}
        />
        <GridButtonForm onClick={onHandleClick} nameButtonSubmit="Log In" />
      </form>
      <a>Lost your Password?</a>
      <br />
      <a href="/register">Don't have An account?</a>
    </div>
  );
};

export default Login;
