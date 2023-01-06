import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import InputTextContainer from "../formComponents/InputTextContainer";
import GridButtonForm from "../formComponents/button/GridButtonForm";
import {
  dateRegister,
  amountRegister,
  descriptionRegister,
} from "./functionality/expenseIncomesRegister";
import SelectTextContainer from "../formComponents/SelectTextContainer";
import TextareaContainer from "../formComponents/TextareaContainer";
import { toast } from "react-hot-toast";
import SelectAccount from "../accounts/SelectAccount";
import { getCategories, getTypeTransfer } from "../../services/services";
import { getAllAccounts } from "../../services/accounts";

import "./css/config.css";

const initialValues = {
  date: "",
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

  const [select, setSelect] = useState({ transfers: [], categories: [], accounts: [] });

  const fetchDataSelect = useCallback(async () => {
    const [transfers, categories, accounts] = await Promise.all([
      getTypeTransfer(),
      getCategories(),
      getAllAccounts(),
    ]);
    setSelect({ transfers, categories, accounts });
  }, []);

  useEffect(() => {
    fetchDataSelect();
  }, [fetchDataSelect]);

  const propsSelectOriginAccount = {
    label: "Select Source Account",
    name: "AccountOrigin",
    Controller,
    control,
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

          {/*   <SelectAccount
            AccountOrigin={watch("AccountOrigin", false)}
            reset={reset}
            propsSelectOriginAccount={propsSelectOriginAccount}
          /> */}
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

          <GridButtonForm onClick={handleClick} nameButtonSubmit="Process" />
        </form>
      </div>
    </div>
  );
};

export default ExpenseIncome;
