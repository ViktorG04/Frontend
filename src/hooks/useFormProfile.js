import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { updateUser } from "../redux";
import { clearNotification } from "../redux/slices/userSlice";

const useFormProfile = (setOpen, reset) => {
  const {
    user: { password },
    token,
    error,
    notification,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (notification) {
      toast.success(notification);
      reset();
      setOpen(false);
      dispatch(clearNotification());
    }
  }, [notification, reset, setOpen, dispatch]);

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

    dispatch(updateUser({ newPassword, token }));
  };

  const handleClick = () => {
    setOpen(false);
    reset();
  };

  return { password, onHandleSubmit, handleClick };
};

export default useFormProfile;
