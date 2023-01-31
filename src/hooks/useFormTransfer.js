import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getExchanges } from '../services/exchange';
import { findAccount } from '../components/transfers/findAccount';
import toast from 'react-hot-toast';

const useFormTransfer = (watch, reset) => {

  const { token } = useSelector((state) => state.auth);
  const { accounts } = useSelector((state) => state.accounts);

  const [open, setOpen] = useState(false);
  const [conversion, setConversion] = useState({});
  const [accountSelected, setAccountSelected] = useState({});

  const navigate = useNavigate();

  const accountOrigin = watch("accountOrigin", false);

  useEffect(() => {
    if (accountOrigin) {
      const data = findAccount(accounts, accountOrigin);
      setAccountSelected(data);
    }
  }, [accountOrigin, accounts]);

  const onHandleSubmit = async (data) => {
    let { accountOrigin, accountDestiny, amount } = data;

    let { available } = accountSelected;

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
    accountSelected,
    conversion,
    open,
    onHandleSubmit,
    onHandleClosed,
    onHandleClick,
  };

};


export default useFormTransfer;