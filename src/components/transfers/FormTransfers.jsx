import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import InputTextContainer from "../formComponents/InputTextContainer";
import { amountRegister, accountOriginRegister, accountDestinyRegister } from "./transferRegister";
import { useForm, Controller } from "react-hook-form";
import SelectDynamic from "../formComponents/SelectDynamic";
import Paragraph from "../paragraph/Paragraph";

import "./css/transfer.css";
import GridButtonForm from "../formComponents/button/GridButtonForm";
import dateFormat from "../../utils/dateFormat";

import Select from "react-select";
import GridButton from "../formComponents/button/GridButton";

const defaultValues = {
  date: dateFormat(),
  amount: null,
  accountOrigin: false,
  accountDestiny: false,
};

const FormTransfers = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    control,
  } = useForm({ defaultValues });

  const { accounts } = useSelector((state) => state.accounts);

  const [transferMoney, setTransferMoney] = useState({
    conversion: "",
    exchange: "",
  });

  const navigate = useNavigate();

  const onHandleSubmit = async (data) => {
    console.log(data);
  };

  const onHandleClick = () => {
    reset(defaultValues);
    navigate("/dashboard");
  };

  const accountOrigin = watch("accountOrigin", false);
  const accountDestiny = watch("accountDestination", false);

  const dataAccount = (select, restart) => {
    const { bankName, numberAccount, available } = accounts.find(
      (account) => account.idAccount === select.value
    );

    return (
      <div>
        <p>{bankName}</p>
        <p>{numberAccount}</p>
        <p>{available}</p>
        <button onClick={() => reset(restart)}>Select another account</button>
      </div>
    );
  };

  return (
    <div className="transfer-container">
      <div className="container-body">
        <h1>TRANSFER MONEY</h1>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <InputTextContainer label="Date" type="date" register={register("date")} disable />

          {accountOrigin ? (
            dataAccount(accountOrigin, { accountOrigin: false })
          ) : (
            <SelectDynamic
              label="Account Origin"
              name="accountOrigin"
              control={control}
              rules={accountOriginRegister()}
              accounts={accounts}
              error={errors.accountOrigin?.message}
            />
          )}

          <button>Personal Accounts</button>
          <button>Externals Accounts</button>

          {accountDestiny ? (
            dataAccount(accountDestiny, { accountDestiny: false })
          ) : (
            <SelectDynamic
              label="Beneficiary Account"
              name="accountDestiny"
              control={control}
              rules={accountDestinyRegister()}
              accounts={accounts}
              error={errors.accountDestiny?.message}
            />
          )}

          <InputTextContainer
            label="Amount to Transfer"
            type="number"
            register={amountRegister(register)}
            error={errors.amount?.message}
          />

          <Paragraph description="Conversion Value" text={transferMoney.exchange} />
          <Paragraph description="Amount to Transfer with divisa" text={transferMoney.conversion} />

          <GridButtonForm onClick={() => onHandleClick()} nameButtonSubmit="Process" />
        </form>
      </div>
    </div>
  );
};

export default FormTransfers;
