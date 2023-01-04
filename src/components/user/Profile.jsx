import React from "react";
import { UserFormWithControlled } from "./UserForm";
import toast from "react-hot-toast";
const Profile = () => {
  const userLogin = {
    id: 1,
    name: "Victor Garcia",
    password: "1234567890",
    email: "vic_antonio_92@hotmail.es",
  };

  const onHandleSubmit = async (data) => {
    const { confirmPassword, ...safeData } = data;

    console.log(safeData);
    toast.success("updated data");
  };

  const configUpdateProfile = {
    buttonSubmitName: "Update",
    formName: "Update your profile",
    inputNameDisable: true,
    inputEmailDisable: true,
    route: "/dashboard",
    onHandleSubmit,
  };

  return (
    <>
      <UserFormWithControlled defaultValues={userLogin} config={configUpdateProfile} />
    </>
  );
};

export default Profile;
