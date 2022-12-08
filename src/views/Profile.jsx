import React, {useContext} from 'react'
import { UserFormWithControlled } from '../components/user/UserForm';
import UserContext from '../context/UserContext';
import { decrypt } from '../utils/encrypt-decrypt'
import toast, { Toaster } from "react-hot-toast";
const Profile = () => {

  //api context
  const useLocalStoreEncrypt = useContext(UserContext);
  const userLogin = JSON.parse(decrypt(useLocalStoreEncrypt.userLogin));

  const { password } = userLogin;
  userLogin.confirmPassword = password;

  const onHandleSubmit = async (data) => {
    const { password, confirmPassword, ...safeData } = data;
    safeData.password = password;
    
    toast.success('updated data');

  };

  const configUpdateProfile = {
    buttonSubmitName: 'Update',
    formName: 'Update your profile',
    inputNameDisable: true,
    route: "/dashboard",
    Toaster,
    onHandleSubmit
  };

  return (
    <>
     <UserFormWithControlled defaultValues={userLogin} config={configUpdateProfile}/>
    </>
  );
};

export default Profile;