import { useDispatch } from "react-redux";
import { transfers } from "../services/services";
import { consultAccounts } from "../redux/slices/accountSlice";
import { toast } from "react-hot-toast";

const useProcessTransfer = (values, onClick) => {
  const dispatch = useDispatch();

  const onHandleSubmit = async () => {
    const { token, ...data } = values;
    try {
      const result = await transfers({ data, token });
      toast.success(result.message);
      dispatch(consultAccounts());
      onClick();
    } catch (error) {
      toast.error(error);
    }
  };
  return {
    onHandleSubmit,
  };
};

export default useProcessTransfer;
