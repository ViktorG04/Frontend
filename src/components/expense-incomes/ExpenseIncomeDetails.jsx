import React from "react";
import { formatAmount } from "../../utils/formatAmount";
import "./css/expenseIncomeDetail.css";

const ExpenseIncomeDetails = ({ title, object, amount, symbol }) => {
  return (
    <div className="container-detail">
      <h2>{title}</h2>
      <table className="table-details">
        <thead>
          <tr>
            <th className="th-left">#</th>
            <th>DATE</th>
            <th>CATEGORY</th>
            <th>DESCRIPTION</th>
            <th className="th-right">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {object.map((detail, index) => (
            <tr key={`detail-${index}`}>
              <td>{parseInt(index) + 1}</td>
              <td>{detail.date}</td>
              <td>{detail.category}</td>
              <td>{detail.description}</td>
              <td align="right">{formatAmount("", detail.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!object.length ? (
        <h3>NO DATA</h3>
      ) : (
        <div className="container-sum">
          <strong>SUM</strong>
          <p>{formatAmount(symbol, amount)}</p>
        </div>
      )}
    </div>
  );
};

export default ExpenseIncomeDetails;
