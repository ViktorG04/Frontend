import React from "react";
import Button from "../components/formComponents/button/Button";
import Modal from "../components/modal/Modal";
import Paragraph from "../components/paragraph/Paragraph";
import GridButton from "../components/formComponents/button/GridButton";
import useAccount from "../hooks/useAccount";
import ExpenseIncomeDetails from "../components/expense-incomes/ExpenseIncomeDetails";
import { SYMBOL_MONEY } from "../config/config";
import { formatAmount } from "../utils/formatAmount";
import "./css/account.css";

const Account = () => {
  const {
    accountInfo,
    accountFound,
    openState,
    setOpenState,
    onHandleDeleteAccount,
    onHandleClick,
  } = useAccount();

  const { bankName, numberAccount, money, credit, expensive, available } = accountFound;
  const { debits, allExpensive, credits, allIncomes } = accountInfo;

  const symbol = SYMBOL_MONEY[money];

  return (
    <div className="container-account">
      <div className="container-account-details">
        <h1>{bankName}</h1>
        <div className="container-account-info">
          <div className="detail">
            <Paragraph description="Number" text={numberAccount} />
            <Paragraph description="Credit" text={formatAmount(symbol, credit)} />
            <Paragraph description="Debit" text={formatAmount(symbol, expensive)} />
            <Paragraph description="Available" text={formatAmount(symbol, available)} />
          </div>
          <div className="button">
            <Button type="button" onClick={() => setOpenState(true)} name="Delete Account" />
          </div>
        </div>
      </div>

      <ExpenseIncomeDetails title="DEBITS" object={debits} amount={allExpensive} symbol={symbol} />
      <ExpenseIncomeDetails title="CREDITS" object={credits} amount={allIncomes} symbol={symbol} />

      <div className="container-button">
        <Button type="reset" name="Back" onClick={() => onHandleClick()} />
      </div>

      <Modal isOpen={openState}>
        <div className="container-delete">
          <h3>Are you sure to delete this account?</h3>
          <GridButton>
            <Button
              type="reset"
              name="cancel"
              onClick={() => {
                setOpenState(false);
              }}
            />
            <Button
              type="submit"
              name="process"
              onClick={() => {
                onHandleDeleteAccount();
              }}
            />
          </GridButton>
        </div>
      </Modal>
    </div>
  );
};

export default Account;
