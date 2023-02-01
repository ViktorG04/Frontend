import React from "react";
import { Link } from "react-router-dom";
import { SYMBOL_MONEY } from "../../config/config";

const TableAccounts = ({ accounts }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>DESCRIPTION</th>
          <th>PRODUCT</th>
          <th>CURRENCY</th>
          <th>AVAILABLE</th>
          <th>EXPENSIVE</th>
          <th>DATE EXPIRATION</th>
          <th>WATCH</th>
          <th>REPORT</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((account, index) => (
          <tr key={`account-${index}`}>
            <td>{parseInt(index) + 1}</td>
            <td>{account.bankName}</td>
            <td>{account.numberAccount}</td>
            <td>{account.money}</td>
            <td>{SYMBOL_MONEY[account.money] + " " + account.available}</td>
            <td>{SYMBOL_MONEY[account.money] + " " + account.expensive}</td>
            <td>{account.date}</td>
            <td>
              <Link to={`/account/${account.idAccount}`}>Details</Link>
            </td>
            <td>
              <Link to={`/report/${account.idAccount}`}> Report</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAccounts;
