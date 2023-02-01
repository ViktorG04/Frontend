import { transfers } from "../services/services";
import { toast } from "react-hot-toast";

const values = { value: "", label: "" };

const useProcessTransfer = (conversion, onClick) => {
  const {
    accountDestiny = values,
    accountOrigin = values,
    amount,
    currency,
    date,
    exchange,
    transferTo,
    token,
    description,
  } = conversion;

  const { value: idAccountDestiny, label: numberAccountDestiny } =
    accountDestiny;
  const { value: idAccountOrigin, label: numberAccountOrigin } = accountOrigin;

  const onHandleSubmit = async () => {


    let data = {
      date,
      idAccountOrigin,
      idAccountDestiny,
      amountOrigin: amount,
      amountDestiny: exchange,
      taxes: currency,
      description,
    };
    try {
      const result = await transfers({ data, token });
      toast.success(result.message);
      onClick();
    } catch (error) {
      toast.error(error);
    }
  };
  return { numberAccountOrigin, numberAccountDestiny, amount, transferTo, currency, exchange, onHandleSubmit }
}

export default useProcessTransfer
