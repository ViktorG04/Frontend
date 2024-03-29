import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { registered } from "../services/register";

const useFormRegister = () => {
  const navigate = useNavigate();

  const onHandleSubmit = async (data) => {
    const { confirmPassword, ...safeData } = data;

    try {
      const request = await registered(safeData);
      toast.success(request);
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };

  const handleClick = () => {
    navigate("/");
  };

  return { onHandleSubmit, handleClick };
};

export default useFormRegister;
