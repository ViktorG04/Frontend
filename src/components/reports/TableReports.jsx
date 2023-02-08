import React from "react";
import { formatAmount } from "../../utils/formatAmount";
import "./css/reportTable.css";
const TableReports = ({ object }) => {
  return (
    <table className="table-report">
      <thead>
        <tr>
          <th className="th-left">#</th>
          <th>BANK NAME</th>
          <th>NUMBER ACCOUNT</th>
          <th>DATE</th>
          <th>CATEGORY</th>
          <th>REPORT</th>
          <th>DESCRIPTION</th>
          <th className="th-right">AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        {object.map((detail, index) => (
          <tr key={`detail-${index}`}>
            <td>{parseInt(index) + 1}</td>
            <td>{detail.bankName}</td>
            <td>{detail.numberAccount}</td>
            <td>{detail.date}</td>
            <td>{detail.category}</td>
            <td>{detail.report}</td>
            <td>{detail.description}</td>
            <td align="right">{formatAmount("", detail.amount)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableReports;
