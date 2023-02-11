import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getExchanges } from "../services/exchange";
import toast from "react-hot-toast";
import useFindAccount from "../hooks/useFindAccount";
import useModal from "./useModal";
import useReduxData from "./useReduxData";
import useGetAccounts from "./useGetAccounts";

const defaultValueMoney = {
  from: "",
  to: "",
  default: null,
};

const useFormTransfer = ({ reset, watch, check }) => {
  const [conversion, setConversion] = useState({});
  const [change, setChange] = useState(defaultValueMoney);

  const { token, accounts } = useReduxData();
  const { open, onCloseModal, onOpenModal } = useModal(false);

  const navigate = useNavigate();

  const accountOrigin = watch("accountOrigin", false);
  const accountDestiny = watch("accountDestiny", false);

  const { personalAccounts, anotherAccounts } = check;

  const { accountFound: accountOriginSelected } = useFindAccount({
    idAccount: accountOrigin["value"],
    objectFind: accounts,
  });

  const { destinyAccounts } = useGetAccounts({
    anotherAccounts,
    personalAccounts,
    idAccount: accountOrigin["value"],
  });

  const { accountFound: accountDestinySelected } = useFindAccount({
    idAccount: accountDestiny["value"],
    objectFind: destinyAccounts,
  });

  const { money, available } = accountOriginSelected;
  const { money: moneyDestiny, bankName: bankDestiny } = accountDestinySelected;

  useEffect(() => {
    if (money && moneyDestiny) {
      setChange({ from: money, to: moneyDestiny, default: true });
    }
  }, [money, moneyDestiny]);

  const onHandleSubmit = async (data) => {
    const { accountOrigin, accountDestiny, amount, ...res } = data;
    const { from, to } = change;
    const cost = parseFloat(amount);

    try {
      const response = await toast.promise(getExchanges({ to, from, amount, token }), {
        loading: "Loading...",
        success: <b>Success!</b>,
      });
      const { currency, exchange, taxes } = response;
      const amountOrigin = from === money ? cost : exchange;

      if (available < amountOrigin) {
        return toast.error(
          `insufficient credit to transfer, available: ${available}, value transfer${amountOrigin}`
        );
      }

      const exactData =
        from === money
          ? { amountOrigin, amountDestiny: exchange, from, to }
          : { amountOrigin, amountDestiny: cost, from: to, to: from };

      const sendTransfer = {
        accountOrigin,
        accountDestiny,
        token,
        currency,
        taxes,
      };

      setConversion({ ...sendTransfer, ...res, ...exactData });
      onOpenModal();
    } catch (error) {
      toast.error(error);
    }
  };

  const onHandleClick = () => {
    reset();
    setConversion({});
    setChange(defaultValueMoney);
    navigate("/dashboard");
  };

  const onHandleClosed = () => {
    onCloseModal();
    reset();
    setConversion({});
    setChange(defaultValueMoney);
  };

  const changeTransfer = () => {
    change.default
      ? setChange({ from: moneyDestiny, to: money, default: false })
      : setChange({ from: money, to: moneyDestiny, default: true });
  };

  return {
    accountOriginSelected,
    destinyAccounts,
    bankDestiny,
    open,
    conversion,
    change,
    onHandleSubmit,
    onHandleClick,
    onHandleClosed,
    changeTransfer,
  };
};

export default useFormTransfer;
