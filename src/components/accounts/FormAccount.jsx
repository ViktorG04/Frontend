import { useForm } from "react-hook-form";
import SelectTextContainer from "../formComponents/SelectTextContainer";
import InputTextContainer from "../formComponents/InputTextContainer";
import GridButtonForm from "../formComponents/button/GridButtonForm";
import useFormAccount from "../../hooks/useFormAccount";
import useRegisterAccount from "../../hooks/useRegisterAccount";

import "./css/formAccount.css";

const defaultValues = {
  dateExpiration: "",
  bankName: "",
  numberAccount: "",
  credit: "",
  idTypeMoney: "1",
};

const FormAccount = ({ onCloseModel }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const { accountName, accountNumber, accountDate, accountCredit } =
    useRegisterAccount({ register });

  const { typeMoney, onHandleSubmit, onHandleClick } = useFormAccount(
    reset,
    onCloseModel
  );

  return (
    <div className="container-form">
      <h2>Add Account</h2>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <InputTextContainer
          label="Name of the Bank"
          type="text"
          register={accountName()}
          error={errors.bankName?.message}
        />
        <InputTextContainer
          label="Account number"
          type="number"
          register={accountNumber()}
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
          register={accountDate()}
          error={errors.dateExpiration?.message}
        />
        <InputTextContainer
          label="Account credit"
          type="text"
          register={accountCredit()}
          error={errors.credit?.message}
        />
        <GridButtonForm onClick={onHandleClick} nameButtonSubmit="Create" />
      </form>
    </div>
  );
};

export default FormAccount;
