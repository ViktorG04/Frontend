import React from "react";
import FormReport from "../components/reports/FormReport";

import TableReports from "../components/reports/TableReports";
import useReport from "../hooks/useReport";
import "./css/viewReport.css";

const Reports = () => {
  const { consult, select, onHandleSubmit, onHandleClick } = useReport();

  return (
    <div className="container-report">
      <div className="container-form">
        <h1>REPORTS</h1>
        <FormReport select={select} onHandleSubmit={onHandleSubmit} onHandleClick={onHandleClick} />
      </div>
      <div className="container-table">
        <TableReports object={consult.reports} />
        {!consult.success ? <h3>NO DATA</h3> : null}
      </div>
    </div>
  );
};

export default Reports;
