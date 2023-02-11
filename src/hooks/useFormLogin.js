import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  }, [dispatch, error]);

  useEffect(() => {
    if (isLogged) {
      toast.success("Welcome");
      navigate("/dashboard");
    }
  }, [isLogged, navigate]);

  return { onHandleSubmit };
};

export default useFormLogin;
