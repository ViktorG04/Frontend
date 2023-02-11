import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/formComponents/button/Button";
import SelectTextContainer from "../components/formComponents/SelectTextContainer";
import SimpleInput from "../components/formComponents/SimpleInput";
import TableReports from "../components/reports/TableReports";
import useReport from "../hooks/useReport";
import "./css/viewReport.css";

const defaultValues = { idAccount: "", idCategory: "", date: "" };

const Reports = () => {
  const { register, handleSubmit, reset } = useForm({ defaultValues });

  const { consult, select, onHandleSubmit, onHandleClick } = useReport(reset);

  const { selectAccounts, categories } = select;

  return (
    <div className="container-report">
      <div className="container-form">
        <h1>REPORTS</h1>
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
      </div>
      <div className="container-table">
        <TableReports object={consult.reports} />
        {!consult.success ? <h3>NO DATA</h3> : null}
      </div>
    </div>
  );
};

export default Reports;
