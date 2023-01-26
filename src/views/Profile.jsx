import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal/Modal";
import NameEmailForm from "../components/user/NameEmailForm";
import GridButton from "../components/formComponents/button/GridButton";
import Button from "../components/formComponents/button/Button";
import ProfileForm from "../components/user/ProfileForm";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const {
    user: { name, email },
  } = useSelector((state) => state.auth);

  const {
    register,
    formState: { errors },
  } = useForm({ defaultValues: { name, email } });

  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <NameEmailForm register={register} errors={errors} disable={true} />
        <GridButton>
          <Button type="reset" name="Cancel" onClick={onHandleClick} />
          <Button
            type="button"
            name="Update Password"
            onClick={() => setOpen(true)}
          />
        </GridButton>
      </div>
      <Modal isOpen={open}>
        <ProfileForm setOpen={setOpen} />
      </Modal>
    </div>
  );
};

export default Profile;
