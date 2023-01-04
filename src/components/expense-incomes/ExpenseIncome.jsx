import React, { useState, useEffect, useCallback } from "react";
import dateFormat from "../../utils/dateTime";
import { useForm, Controller } from "react-hook-form";
import InputTextContainer from "../formComponents/InputTextContainer";
import GridButton from "../formComponents/button/GridButton";
import Button from "../formComponents/button/Button";
import {
  dateRegister,
  amountRegister,
  descriptionRegister,
} from "./funcionality/expenseIncomesRegister";
import SelectTextContainer from "../formComponents/SelectTextContainer";
import { accounts } from "../../data";
import TextareaContainer from "../formComponents/TextareaContainer";
import { toast } from "react-hot-toast";
import SelectAccount from "../accounts/SelectAccount";
import { getCategories, getTypeTransfer } from "../../services/services";

import "./css/config.css";

const initialValues = {
  date: dateFormat(),
  amount: 0.0,
  description: "",
};

const ExpenseIncome = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm({ defaultValues: initialValues });

  const [select, setSelect] = useState({ transfers: [], categories: [] });

  const fetchDataSelect = useCallback(async () => {
    const [transfers, categories] = await Promise.all([getTypeTransfer(), getCategories()]);
    setSelect({ transfers, categories });
  }, []);

  useEffect(() => {
    fetchDataSelect();
  }, [fetchDataSelect]);

  const propsSelectOriginAccount = {
    label: "Select Source Account",
    name: "AccountOrigin",
    Controller,
    control,
    accounts,
    errors,
  };

  const onHandleSubmit = (data) => {
    const { AccountOrigin, amount, transfer, ...safeData } = data;

    //const { idAccount, available } = infoAccountOrigin;

    /* if (amount > available && transfer === "1") {
      return toast.error("Insufficient credit to add an expensive");
    }

    const report = { idAccount, amount, transfer, ...safeData };
    console.log(report); */
  };

  const handleClick = () => {};

  return (
    <div className="container-expensiveIncome">
      <div className="container-body">
        <h1>Report Expense/Income</h1>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <InputTextContainer
            label="Date"
            type="date"
            register={dateRegister(register)}
            error={errors.date?.message}
          />
          {select.transfers ? (
            <SelectTextContainer
              label="Type of Transfer"
              listSelect={select.transfers}
              register={register("idTransfer")}
            />
          ) : (
            ""
          )}
          {select.categories ? (
            <SelectTextContainer
              label="Category"
              listSelect={select.categories}
              register={register("idCategory")}
            />
          ) : (
            ""
          )}

          <SelectAccount
            AccountOrigin={watch("AccountOrigin", false)}
            accounts={accounts}
            reset={reset}
            propsSelectOriginAccount={propsSelectOriginAccount}
          />
          <InputTextContainer
            label="Amount to Transfer"
            type="text"
            register={amountRegister(register)}
            error={errors.amount?.message}
          />
          <TextareaContainer
            label="Description"
            register={descriptionRegister(register)}
            error={errors.description?.message}
          />

          <GridButton>
            <Button type="reset" onClick={handleClick} name="Cancel" />
            <Button type="submit" name="Process" />
          </GridButton>
        </form>
      </div>
    </div>
  );
};

export default ExpenseIncome;
