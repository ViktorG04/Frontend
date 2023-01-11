import React, { useState } from "react";
import "./css/Account.css";

import Paragraph from "../paragraph/Paragraph";
import Button from "../formComponents/button/Button";
const Account = ({ account }) => {
  const { idAccount, bankName, numberAccount, expensive, income, available } = account;
  return (
    <>
      <div className="section">
        <Paragraph description="Bank name" text={bankName} />
        <Paragraph description="Account Number" text={numberAccount} />
      </div>
      <div className="section">
        <Paragraph description="Available" text={available} />
      </div>
    </>
  );
};

export default Account;
