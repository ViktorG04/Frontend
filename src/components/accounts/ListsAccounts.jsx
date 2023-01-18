import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { getAccountsByeIdUser } from "../../redux";
import Button from "../formComponents/button/Button";
import FormAccount from "./FormAccount";
import Modal from "../modal/Modal";
import TableAccounts from "./TableAccounts";
import "./css/listAccounts.css";

const ListsAccounts = () => {
  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState(0);

  const { loading, errors, accounts } = useSelector((state) => state.accounts);
  const {
    user: { idUser },
    token,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccountsByeIdUser({ idUser, token }));
  }, [dispatch, idUser, token]);

  useEffect(() => {
    if (accounts.length) {
      const allAvailable = accounts.reduce((acc, account) => {
        return acc + account.available;
      }, 0);
      setBalance(allAvailable);
    }
  }, [accounts]);

  useEffect(() => {
    if (errors) {
      toast.error(errors);
    }
  }, [errors]);

  return (
    <div className="container-accountList">
      <h1>Personal Accounts</h1>
      <Button type="button" onClick={() => setOpen(true)} name="Create new Account" />
      <Modal isOpen={open}>
        <FormAccount onClose={() => setOpen(false)} />
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
