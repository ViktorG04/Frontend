import React, { useState } from "react";
import ListsExchange from "../components/accounts/ListsExchange";
import ListsAccounts from "../components/accounts/ListsAccounts";
import "./css/accounts.css";
const Accounts = () => {
  return (
    <div className="container-accounts">
      <ListsAccounts />
      <ListsExchange />
    </div>
  );
};

export default Accounts;
