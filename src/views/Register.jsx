import { useForm } from "react-hook-form";
import useFormRegister from "../hooks/useFormRegister";
import NameEmailForm from "../components/user/NameEmailForm";
import PasswordForm from "../components/user/PasswordForm";
import "./css/registerProfile.css";
import GridButtonForm from "../components/formComponents/button/GridButtonForm";

const defaultValues = {
  name: "",
  password: "",
  email: "",
};

const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues });

  const { onHandleSubmit, handleClick } = useFormRegister();

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <NameEmailForm register={register} errors={errors} disable={false} />
        <PasswordForm register={register} errors={errors} getValues={getValues} />
        <GridButtonForm onClick={handleClick} nameButtonSubmit="Register" />
      </form>
    </div>
  );
};

export default Register;
