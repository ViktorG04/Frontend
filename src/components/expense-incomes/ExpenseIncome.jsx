import React from "react";
import { useForm } from "react-hook-form";
import InputTextContainer from "../formComponents/InputTextContainer";
import SelectTextContainer from "../formComponents/SelectTextContainer";
import TextareaContainer from "../formComponents/TextareaContainer";
import GridButtonForm from "../formComponents/button/GridButtonForm";
import useFormReport from "../../hooks/useFormReport";
import useRegisterExpenseIncome from "../../hooks/useRegisterExpenseIncome";

import "./css/config.css";

const defaultValues = {
  date: "",
  amount: "",
  description: "",
  idTypeTransfer: "1",
  idCategory: "1",
};

const ExpensiveIncome = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });

  const { dateRegister, descriptionRegister, amountRegister } =
    useRegisterExpenseIncome({ register });

  const { select, numberAccount, onHandleSubmit, onHandleClick } =
    useFormReport(reset);

  return (
    <div className="container-expensiveIncome">
      <h1>Report Expense/Income</h1>
      <h3>Number Account: {numberAccount}</h3>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <InputTextContainer
          label="Date"
          type="date"
          register={dateRegister()}
          error={errors.date?.message}
        />
        {select.transfers ? (
          <SelectTextContainer
            label="Type of Transfer"
            listSelect={select.transfers}
            register={register("idTypeTransfer")}
          />
        ) : null}
        {select.categories ? (
          <SelectTextContainer
            label="Category"
            listSelect={select.categories}
            register={register("idCategory")}
          />
        ) : null}

        <InputTextContainer
          label="Amount"
          type="text"
          register={amountRegister()}
          error={errors.amount?.message}
        />
        <TextareaContainer
          label="Description"
          register={descriptionRegister()}
          error={errors.description?.message}
        />
        <GridButtonForm
          onClick={() => onHandleClick()}
          nameButtonSubmit="Process"
        />
      </form>
    </div>
  );
};

export default ExpensiveIncome;
