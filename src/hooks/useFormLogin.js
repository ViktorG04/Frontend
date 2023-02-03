import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { consultAccounts } from "../redux/slices/accountSlice";
import { signUp } from "../redux";

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
