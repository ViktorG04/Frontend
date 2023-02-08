import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { consultAccounts } from "../redux/slices/accountSlice";
import { clearNotification } from "../redux/slices/userSlice";
import { signUp } from "../redux";
import toast from "react-hot-toast";

const useFormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLogged, error } = useSelector((state) => state.auth);

  const onHandleSubmit = (data) => {
    const action = signUp(data);
    dispatch(action);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearNotification());
    }

    if (isLogged) {
      toast.success("Welcome");
      navigate("/dashboard");
      dispatch(consultAccounts());
    }
  }, [isLogged, error, navigate, dispatch]);

  return { onHandleSubmit };
};

export default useFormLogin;
