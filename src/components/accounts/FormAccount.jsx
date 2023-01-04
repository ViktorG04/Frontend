import { useForm } from "react-hook-form";
import SelectTextContainer from "../formComponents/SelectTextContainer";
import InputTextContainer from "../formComponents/InputTextContainer";
import GridButton from "../formComponents/button/GridButton";
import Button from "../formComponents/button/Button";
import {
  accountCredit,
  accountDate,
  accountName,
  accountNumber,
} from "./functionality/addAccountRegister";

import useFormAccount from "../../hooks/useFormAccount";
import "./css/formAccount.css";

const defaultValues = {
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

  const { typeMoney, onHandleSubmit, onHandleClick } = useFormAccount(
    onClose,
    reset,
    defaultValues
  );

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
        <SelectTextContainer
          label="kind of Money"
          listSelect={typeMoney}
          register={register("idTypeMoney")}
        />
        <InputTextContainer
          label="Account number"
          type="number"
          register={accountNumber(register)}
          error={errors.numberAccount?.message}
        />
        <InputTextContainer
          label="Expiration date"
          type="date"
          register={accountDate(register)}
          error={errors.dateExpiration?.message}
        />
        <InputTextContainer
          label="Account credit"
          type="number"
          register={accountCredit(register)}
          error={errors.credit?.message}
        />
        <GridButton>
          <Button name="Cancel" type="reset" onClick={onHandleClick} />
          <Button name="Create" type="submit" />
        </GridButton>
      </form>
    </div>
  );
};

export default FormAccount;
