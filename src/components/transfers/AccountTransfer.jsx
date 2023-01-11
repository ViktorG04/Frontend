import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import InputTextContainer from "../formComponents/InputTextContainer";
import { amountRegister, transferDate } from "./transferRegister";
import { useForm, Controller } from "react-hook-form";
import SelectDynamic from "../formComponents/SelectDynamic";
import Paragraph from "../paragraph/Paragraph";
import { objectOfSelect, transfers, valueDivisa } from "../accounts/functionality/transfers";
import AccountDetails from "../accounts/AccountDetails";

import "./css/transfer.css";
import GridButtonForm from "../formComponents/button/GridButtonForm";

const defaultValues = {
  date: "",
  amount: 0.0,
  AccountOrigin: false,
  AccountDestination: false,
};

const AccountTransfer = () => {
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

  const AccountOrigin = watch("AccountOrigin", false);
  let source, beneficiary;

  if (AccountOrigin) {
    source = accounts.find((account) => account.idAccount === AccountOrigin.value);
  }

  const AccountDestination = watch("AccountDestination", false);

  if (AccountDestination) {
    beneficiary = accounts.find((account) => account.idAccount === AccountDestination.value);
  }

  const handleClick = () => {
    reset({ AccountOrigin: false });
  };

  const handleClick2 = () => {
    reset({ AccountDestination: false });
  };

  // const [state, setState] = useState();

  const onHandleSubmit = async (data) => {
    const { AccountOrigin, AccountDestination, amount } = data;

    const originData = await objectOfSelect(accounts, AccountOrigin.value);

    const destinationData = await objectOfSelect(accounts, AccountDestination.value);

    const processData = {
      date: data.date,
      idAccountOrigin: originData.idAccount,
      idAccountDestiny: destinationData.idAccount,
      amountOrigin: amount,
      amountDestiny: transferMoney.conversion,
    };
  };

  const propsSelectOrigin = {
    label: "Select Source Account",
    name: "AccountOrigin",
    Controller,
    control,
    accounts,
    errors,
  };

  const propsSelectDestination = {
    label: "Select Beneficiary Account",
    name: "AccountDestination",
    Controller,
    control,
    accounts,
    errors,
  };

  return (
    <div className="transfer-container">
      <div className="container-body">
        <h1>TRANSFER MONEY</h1>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <InputTextContainer
            label="Date"
            type="date"
            register={transferDate(register)}
            error={errors.date?.message}
            disable
          />
          {AccountOrigin ? (
            <AccountDetails
              transferType="Source Account"
              nameAccount={source.bankName}
              numberAccount={source.numberAccount}
              amountAvailable={source.available}
              handleClick={handleClick}
            />
          ) : (
            <SelectDynamic props={propsSelectOrigin} />
          )}
          {AccountDestination ? (
            <AccountDetails
              transferType="Beneficiary Account"
              nameAccount={beneficiary.bankName}
              numberAccount={beneficiary.numberAccount}
              amountAvailable={beneficiary.available}
              handleClick={handleClick2}
            />
          ) : (
            <SelectDynamic props={propsSelectDestination} />
          )}

          <InputTextContainer
            label="Amount to Transfer"
            type="text"
            register={amountRegister(register)}
            error={errors.amount?.message}
          />

          <Paragraph description="Conversion Value" text={transferMoney.exchange} />
          <Paragraph description="Amount to Transfer with divisa" text={transferMoney.conversion} />

          <GridButtonForm onClick={handleClick} nameButtonSubmit="Process" />
        </form>
      </div>
    </div>
  );
};

export default AccountTransfer;
