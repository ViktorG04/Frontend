import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { registered } from "../services/register";

const useFormRegister = () => {
  const navigate = useNavigate();

  const onHandleSubmit = async (data) => {
    const { confirmPassword, ...safeData } = data;

    try {
      const request = await registered(safeData);
      toast.success(request.msg);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleClick = () => {
    navigate("/");
  };

  return { onHandleSubmit, handleClick };
};

export default useFormRegister;
