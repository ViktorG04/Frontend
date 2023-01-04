import toast from "react-hot-toast";
import { UserFormWithControlled } from "../components/user/UserForm";
import { registered } from "../services/register";

import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  password: "",
  email: "",
};

const Register = () => {
  const navigate = useNavigate();

  const onHandleSubmit = async (data) => {
    const { confirmPassword, ...safeData } = data;

    try {
      const request = await registered(safeData);
      toast.success(request.msg);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const configRegisterProfile = {
    buttonSubmitName: "Register",
    formName: "Registration Form",
    inputNameDisable: false,
    route: "/",
    onHandleSubmit,
    disable: true,
  };

  return <UserFormWithControlled defaultValues={initialValues} config={configRegisterProfile} />;
};

export default Register;
