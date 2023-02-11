import React from "react";
import { useForm } from "react-hook-form";
import { SYMBOL_MONEY } from "../../config/config";
import SelectTextContainer from "../formComponents/SelectTextContainer";
import TextareaContainer from "../formComponents/TextareaContainer";
import Button from "../formComponents/button/Button";
import useFormReport from "../../hooks/useFormReport";
import useRegisterTransfer from "../../hooks/useRegisterTransfer";
import SimpleInput from "../formComponents/SimpleInput";
import "./css/expenseIncome.css";

const defaultValues = {
  date: "",
  amount: "",
  description: "",
  idTypeTransfer: "1",
  idCategory: "1",
};

const ExpensiveIncome = () => {
  const { select, numberAccount, money, onHandleSubmit, onHandleClick } = useFormReport();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const { dateRegister, descriptionRegister, amountRegister } = useRegisterTransfer({ register });

  return (
    <div className="container-expensiveIncome">
      <div className="container-expensiveIncome-body">
        <h1>Report Expense/Income</h1>
        <h3>Number Account: {numberAccount}</h3>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <SimpleInput
            label="Date"
            type="date"
            register={dateRegister()}
            error={errors.date?.message}
            className="reportAmount"
          />
          <div className="container-select">
            {select.transfers ? (
              <SelectTextContainer
                className="select-expenseIncome"
                label="Report"
                listSelect={select.transfers}
                register={register("idTypeTransfer")}
              />
            ) : null}
            {select.categories ? (
              <SelectTextContainer
                className="select-expenseIncome"
                label="Category"
                listSelect={select.categories}
                register={register("idCategory")}
              />
            ) : null}
          </div>
          <SimpleInput
            label="Amount"
            type="number"
            register={amountRegister()}
            error={errors.amount?.message}
            placeholder={SYMBOL_MONEY[money] + " 0.00"}
            className="reportAmount"
          />
          <TextareaContainer
            label="Description"
            register={descriptionRegister()}
            error={errors.description?.message}
            className="container-textarea-expenseIncome"
          />
          <div className="container-button">
            <Button type="reset" name="Cancel" onClick={onHandleClick} />
            <Button type="submit" name="Process" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpensiveIncome;
