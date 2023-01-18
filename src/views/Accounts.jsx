import React from "react";
import ListsExchange from "../components/divisas/ListsExchange";
import ListsAccounts from "../components/accounts/ListsAccounts";
import "./css/accounts.css";

const Accounts = () => {
  return (
    <div className="container-accounts">
      <div className="list">
        <ListsAccounts />
      </div>
      <div className="exchange">
        <ListsExchange />
      </div>
    </div>
  );
};

export default Accounts;
