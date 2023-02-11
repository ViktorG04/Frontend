import { useForm } from "react-hook-form";
import useFormLogin from "../hooks/useFormLogin";
import InputTextContainer from "../components/formComponents/InputTextContainer";
import GridButtonForm from "../components/formComponents/button/GridButtonForm";
import useRegisterUser from "../hooks/useRegisterUser";
import { Link } from "react-router-dom";
import "./css/login.css";
import InputPassword from "../components/formComponents/InputPassword";

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
      <div className="container-form-login">
        <h1>Sign In</h1>
        <Link to="/register">Don't have An account?</Link>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <InputTextContainer
            label="Email"
            type="text"
            register={emailRegister()}
            error={errors.email?.message}
          />
          <InputPassword
            label="Password"
            register={passwordRegister()}
            error={errors.password?.message}
          />
          <GridButtonForm onClick={onHandleClick} nameButtonSubmit="Log In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
