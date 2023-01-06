import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Modal from "../components/modal/Modal";
import NameEmailForm from "../components/user/NameEmailForm";
import GridButton from "../components/formComponents/button/GridButton";
import Button from "../components/formComponents/button/Button";
import ProfileForm from "../components/user/ProfileForm";
import useFormProfile from "../hooks/useFormProfile";

import "./css/registerProfile.css";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const { user, onHandleSubmit, handleClick } = useFormProfile(setOpen);

  const { name, email, password } = user;

  const {
    register,
    formState: { errors },
  } = useForm({ defaultValues: { name, email } });

  return (
    <div>
      <div className="container">
        <h2>Profile</h2>
        <div>
          <NameEmailForm register={register} errors={errors} disable={true} />
          <GridButton>
            <Button type="reset" name="Cancel" onClick={handleClick} />
            <Button type="button" name="Update Password" onClick={() => setOpen(true)} />
          </GridButton>
        </div>
      </div>
      <Modal isOpen={open}>
        <ProfileForm onHandleSubmit={onHandleSubmit} setOpen={setOpen} password={password} />
      </Modal>
    </div>
  );
};

export default Profile;
