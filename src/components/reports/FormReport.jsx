import React from "react";
import { useForm } from "react-hook-form";
import SimpleInput from "../formComponents/SimpleInput";
import SelectTextContainer from "../formComponents/SelectTextContainer";
import Button from "../formComponents/button/Button";
import "./css/reportForm.css";

const defaultValues = { idAccount: "", idCategory: "", date: "" };

const FormReport = ({ select, onHandleSubmit, onHandleClick }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  const { selectAccounts, categories } = select;

  return (
    <form className="reportForm" onSubmit={handleSubmit(onHandleSubmit)}>
      <SelectTextContainer
        label="Account"
        listSelect={selectAccounts}
        register={register("idAccount")}
      />
      <SelectTextContainer
        label="Category"
        listSelect={categories}
        register={register("idCategory")}
      />
      <SimpleInput type="date" register={register("date")} />
      <Button type="submit" name="Generate report" />
      <Button type="reset" name="Reset Values" onClick={() => onHandleClick()} />
    </form>
  );
};

export default FormReport;
