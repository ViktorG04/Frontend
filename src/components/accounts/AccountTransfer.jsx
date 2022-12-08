import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import InputTextContainer from "../formComponents/InputTextContainer";
import Button from "../formComponents/Button";
import { amountRegister, transferDate } from "./functionality/transferRegister";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SelectDynamic from "../formComponents/SelectDynamic";
import Paragraph from "../formComponents/Paragraph";
import { accounts } from "../../data";
import {
  objectOfSelect,
  transfers,
  valueDivisa,
} from "./functionality/transfers";
import { divisa } from "../../data";

const AccountTransfer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [valueConversion, setValueConversion] = useState([]);
  const [valueWithDivisa, setValueWithDivisa] = useState("");

  useEffect(() => {}, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/accounts");
  };

  const onHandleSubmit = async (data) => {
    const { AccountOrigin, AccountDestination, amount } = data;

    const originData = await objectOfSelect(accounts, AccountOrigin.value);

    const destinationData = await objectOfSelect(
      accounts,
      AccountDestination.value
    );

    const valueChange = await valueDivisa(
      divisa,
      originData.divisa,
      destinationData.divisa
    );
    setValueConversion(valueChange);

    try {
      const amountTransfer = await transfers(
        amount,
        originData.available,
        valueChange
      );
      setValueWithDivisa(amountTransfer);
    } catch (error) {
      toast.error(error.message);
    }

    const processData = {
      date: data.date,
      idAccountOrigin: originData.idAccount,
      idAccountDestiny: destinationData.idAccount,
      amountOrigin: amount,
      amountDestiny: valueWithDivisa,
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
    <div>
      <div>
        <Toaster />
      </div>
      <h1>TRANSFER MONEY</h1>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <InputTextContainer
          label="Date"
          type="date"
          register={transferDate(register)}
          error={errors.date?.message}
        />
        <SelectDynamic props={propsSelectOrigin} />
        <SelectDynamic props={propsSelectDestination} />

        <InputTextContainer
          label="Amount to Transfer"
          type="text"
          register={amountRegister(register)}
          error={errors.amount?.message}
        />

        <Paragraph description="Conversion Value" text={valueConversion} />
        <Paragraph
          description="Amount to Transfer with divisa"
          text={valueWithDivisa}
        />

        <div>
          <Button type="reset" onClick={handleClick} name="Cancel" />
          <Button type="submit" name="Process" />
        </div>
      </form>
    </div>
  );
};

export default AccountTransfer;
