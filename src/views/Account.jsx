import React from "react";
import Button from "../components/formComponents/button/Button";
import Modal from "../components/modal/Modal";
import { SYMBOL_MONEY } from "../config/config";
import Paragraph from "../components/paragraph/Paragraph";
import GridButton from "../components/formComponents/button/GridButton";
import Details from "../components/table/Details";
import useAccount from "../hooks/useAccount";
import "./css/account.css";

const Account = () => {
  const {
    accountInfo,
    accountFound,
    openState,
    setOpenState,
    onHandleDeleteAccount,
  } = useAccount();

  const { bankName, numberAccount, money, credit, expensive, available } =
    accountFound;
  const { debits, allExpensive, credits, allIncomes } = accountInfo;

  const symbol = SYMBOL_MONEY[money] + " ";

  return (
    <div className="container-account">
      <div>
        <h1>
          <strong>Bank Account</strong>
        </h1>
        <div>
          <div>
            <Paragraph description="bank" text={bankName} />
            <Paragraph description="Number" text={numberAccount} />
            <button onClick={() => setOpenState(true)}>
              Unsubscribe Account
            </button>
          </div>
          <div>
            <Paragraph description="Credit" text={symbol + credit} />
            <Paragraph description="Debit" text={symbol + expensive} />
            <Paragraph description="Available" text={symbol + available} />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>Debits</h2>
          <Details details={debits} amount={allExpensive} symbol={symbol} />
        </div>
        <div>
          <h2>Credits</h2>
          <Details details={credits} amount={allIncomes} symbol={symbol} />
        </div>
      </div>
      <Modal isOpen={openState}>
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
      </Modal>
    </div>
  );
};

export default Account;
