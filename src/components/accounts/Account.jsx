import React from "react";
import Paragraph from ".././paragraph/Paragraph";
import Button from "../formComponents/button/Button";
const Account = ({ account }) => {
  const {
    idAccount,
    bankName,
    numberAccount,
    dateExpiration,
    divisa,
    credit,
    expensive,
    income,
    available,
  } = account;
  return (
    <div style={idAccount % 2 ? { background: "#5072A7" } : { background: "#7CB9E8" }}>
      <Paragraph description="Bank name" text={bankName} />
      <Paragraph description="Account Number" text={numberAccount} />
      <Paragraph description="Expiration date" text={dateExpiration} />
      <Paragraph description="Divisa" text={divisa} />{" "}
      <Paragraph description="Credit Account Limit" text={credit} />
      <Paragraph description="Expenses" text={expensive} />
      <Paragraph description="Incomes" text={income} />
      <Paragraph description="Available" text={available} />
      <Button type="submit" onClick="" name="Edit" />
    </div>
  );
};

export default Account;
