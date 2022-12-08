import { UserFormWithControlled } from "../components/user/UserForm";
import toast, { Toaster } from "react-hot-toast";

const initialValues = {
  name: '',
  password: '',
  email: '',
}

const Register = () => {

  const onHandleSubmit = async (data) => {
    const { password, confirmPassword, ...safeData } = data;
    safeData.password = password;
    
    toast.success('saved data');
  };

 const configRegisterProfile = {
    buttonSubmitName: 'Register',
    formName: 'Registration Form',
    inputNameDisable: false,
    route: "/",
    Toaster,
    onHandleSubmit
  }

  return (
    <>
       <UserFormWithControlled defaultValues={initialValues} config={configRegisterProfile}/>
    </>
  );
};

export default Register;