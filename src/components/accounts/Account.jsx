import React, { useState } from "react";

import Paragraph from ".././paragraph/Paragraph";
import Button from "../formComponents/button/Button";
const Account = ({ account }) => {
  const { idAccount, bankName, numberAccount, expensive, income, available } = account;
  return (
    <div className="account-container">
      <Paragraph description="Bank name" text={bankName} />
      <Paragraph description="Account Number" text={numberAccount} />
      <Paragraph description="Expenses" text={expensive} />
      <Paragraph description="Incomes" text={income} />
      <Paragraph description="Available" text={available} />
    </div>
  );
};

export default Account;
