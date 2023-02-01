import React from "react";
import Button from "../formComponents/button/Button";
import FormAccount from "./FormAccount";
import Modal from "../modal/Modal";
import TableAccounts from "./TableAccounts";
import useListAccount from "../../hooks/useListAccount";
import "./css/listAccounts.css";

const ListsAccounts = () => {
  const { open, loading, balance, accounts, openModal, closeModal } =
    useListAccount();

  return (
    <div className="container-accountList">
      <h1>Personal Accounts</h1>
      <Button
        type="button"
        onClick={() => openModal()}
        name="Create new Account"
      />
      <Modal isOpen={open}>
        <FormAccount isModal={open} onCloseModel={() => closeModal()} />
      </Modal>
      {loading ? <p>Loading...</p> : null}
      <TableAccounts accounts={accounts} />
      <div className="balance-container">
        <strong>Balance</strong>
        <p>{balance}</p>
      </div>
    </div>
  );
};

export default ListsAccounts;
