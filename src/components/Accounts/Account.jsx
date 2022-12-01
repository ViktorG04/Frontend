import React from "react";
import Paragraph from "../formComponents/Paragraph";

const Account = ({ objet }) => {
  return (
    <div style={objet.idAccount %2 ? {background: "#5072A7"} : {background: "#7CB9E8"}} >
      <Paragraph description="Bank name" text={objet.bankName} />
      <Paragraph description="Account Number" text={objet.numberAccount} />
      <Paragraph description="Expiration date" text={objet.dateExpiration} />
      <Paragraph description="Credit Account Limit" text={objet.credit} />
      <Paragraph description="Expenses" text={objet.expensive} />
      <Paragraph description="Incomes" text={objet.income} />
      <Paragraph description="Available" text={objet.available} />
    </div>
  );
};

export default Account;
