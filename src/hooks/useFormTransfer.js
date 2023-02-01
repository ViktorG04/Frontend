import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getExchanges } from '../services/exchange';
import toast from 'react-hot-toast';
import useFindAccount from "../hooks/useFindAccount";

const useFormTransfer = (watch, reset) => {

  const { token } = useSelector((state) => state.auth);

  const [open, setOpen] = useState(false);
  const [conversion, setConversion] = useState({});

  const navigate = useNavigate();

  const accountOrigin = watch("accountOrigin", false);
  const accountDestiny = watch("accountDestiny", false);

  const { accountFound } = useFindAccount({ idAccount: accountOrigin.value })

  const onHandleSubmit = async (data) => {
    let { accountOrigin, accountDestiny, amount } = data;

    let { available } = accountFound;

    available = parseFloat(available);
    amount = parseFloat(amount);

    if (amount > available) {
      return toast.error(
        `insufficient credit to transfer, available: ${available}`
      );
    };

    const idAccountOrigin = accountOrigin.value;
    const idAccountDestiny = accountDestiny.value;

    try {
      const response = await getExchanges({
        idAccountOrigin,
        idAccountDestiny,
        amount,
        token,
      });

      setConversion({ ...response, ...data, token });
      setOpen(true);
    } catch (error) {
      toast.error(error);
    }
  };

  const onHandleClick = () => {
    reset();
    setConversion({});
    navigate("/dashboard");
  };

  const onHandleClosed = () => {
    setOpen(false);
    reset();
    setConversion({});
  };

  return {
    accountOrigin,
    accountDestiny,
    accountFound,
    conversion,
    open,
    onHandleSubmit,
    onHandleClosed,
    onHandleClick,
  };

};


export default useFormTransfer;