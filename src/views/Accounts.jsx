import React from "react";
import ListsExchange from "../components/accounts/ListsExchange";
import ListsAccounts from "../components/accounts/ListsAccounts";
import "./css/accounts.css";
const Accounts = () => {
  return (
    <div className="container-accounts">
      <div className="div1">
        <ListsAccounts />
      </div>
      <div className="div2">
        <ListsExchange />
      </div>
    </div>
  );
};

export default Accounts;
