import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { updateUser } from "../features/user/actions";

const useFormProfile = (setOpen) => {
  const { user, userToken, error, notification } = useSelector((state) => state.auth);

  const { id, password } = user;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (notification) {
      toast.success(notification);
      setOpen(false);
    }
  }, [error, notification]);

  const onHandleSubmit = (data) => {
    const { password: newPassword } = data;

    if (password === newPassword) {
      return toast.error("the new password cannot be the same as the current password");
    }

    const result = updateUser({ id, newPassword, userToken });
    dispatch(result);
  };

  const handleClick = () => {
    navigate("/dashboard");
  };

  return { user, onHandleSubmit, handleClick };
};

export default useFormProfile;
