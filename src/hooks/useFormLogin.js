import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { SignUp } from "../features/user/actions";

const useFormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLogged, error } = useSelector((state) => state.auth);

  const onHandleSubmit = (data) => {
    const action = SignUp(data);
    dispatch(action);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (isLogged) {
      toast.success("Welcome");
      navigate("/dashboard");
    }
  }, [isLogged, error]);

  return { onHandleSubmit };
};

export default useFormLogin;
