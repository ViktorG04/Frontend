import { useForm } from "react-hook-form";
import SelectTextContainer from "../formComponents/SelectTextContainer";
import InputTextContainer from "../formComponents/InputTextContainer";
import GridButtonForm from "../formComponents/button/GridButtonForm";
import useFormAccount from "../../hooks/useFormAccount";
import {
  accountCredit,
  accountDate,
  accountName,
  accountNumber,
} from "./functionality/addAccountRegister";
import "./css/formAccount.css";

const defaultValues = {
  dateExpiration: "",
  bankName: "",
  numberAccount: "",
  credit: "",
};

const FormAccount = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const { typeMoney, onHandleSubmit } = useFormAccount(onClose);

  const onHandleClick = () => {
    reset(defaultValues);
    onClose();
  };

  return (
    <div className="container-form">
      <h2>Add Account</h2>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <InputTextContainer
          label="Name of the Bank"
          type="text"
          register={accountName(register)}
          error={errors.bankName?.message}
        />
        <InputTextContainer
          label="Account number"
          type="number"
          register={accountNumber(register)}
          error={errors.numberAccount?.message}
        />
        <SelectTextContainer
          label="kind of Money"
          listSelect={typeMoney}
          register={register("idTypeMoney")}
        />
        <InputTextContainer
          label="Expiration date"
          type="date"
          register={accountDate(register)}
          error={errors.dateExpiration?.message}
        />
        <InputTextContainer
          label="Account credit"
          type="text"
          register={accountCredit(register)}
          error={errors.credit?.message}
        />
        <GridButtonForm onClick={onHandleClick} nameButtonSubmit="Create" />
      </form>
    </div>
  );
};

export default FormAccount;
