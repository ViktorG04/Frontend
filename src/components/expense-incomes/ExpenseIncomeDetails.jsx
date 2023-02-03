import React from "react";
import Details from "../table/Details";
const ExpenseIncomeDetails = ({ title, object, amount, symbol }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Details details={object} amount={amount} symbol={symbol} />
    </div>
  );
};

export default ExpenseIncomeDetails;
