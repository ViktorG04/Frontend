import React from "react";
import FormAccount from "./FormAccount";
import Modal from "../modal/Modal";
import TableAccounts from "./TableAccounts";
import useListAccount from "../../hooks/useListAccount";
import useModal from "../../hooks/useModal";
import "./css/listAccounts.css";

const ListsAccounts = () => {
  const { open, onOpenModal, onCloseModal } = useModal(false);
  const { loading, balance, accounts } = useListAccount();

  return (
    <div className="container-accountList">
      <h1>Personal Accounts</h1>
      <div className="container-accountList-button">
        <button type="button" onClick={() => onOpenModal()}>
          New Account
        </button>
      </div>

      <Modal isOpen={open}>
        <FormAccount onCloseModal={() => onCloseModal()} open={open} />
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
