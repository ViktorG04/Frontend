import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { updateUser } from "../redux";

const useFormProfile = (setOpen, reset, defaultValues) => {
  const {
    user: { idUser: id, password },
    token,
    error,
    notification,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (notification) {
      toast.success(notification);
      reset(defaultValues);
      setOpen(false);
    }
  }, [notification, reset, defaultValues, setOpen]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const onHandleSubmit = (data) => {
    const { password: newPassword } = data;

    if (password === newPassword) {
      return toast.error("the new password cannot be the same as the current password");
    }

    const result = updateUser({ id, newPassword, token });
    dispatch(result);
  };

  const handleClick = () => {
    setOpen(false);
    reset(defaultValues);
  };

  return { password, onHandleSubmit, handleClick };
};

export default useFormProfile;
