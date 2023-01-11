import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Account from "./Account";
import Button from "../formComponents/button/Button";
import FormAccount from "./FormAccount";
import Modal from "../modal/Modal";
import "./css/listAccounts.css";
import { toast } from "react-hot-toast";

const ListsAccounts = () => {
  const [open, setOpen] = useState(false);

  const { loading, request, errors, accounts } = useSelector((state) => state.accounts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (request && !accounts.length) {
      toast.success("The user has no accounts");
    }
  }, [dispatch, request, accounts]);

  useEffect(() => {
    if (errors) {
      toast.error(errors);
    }
  }, [errors]);

  return (
    <>
      <h1>Personal Accounts</h1>
      <Button onClick={() => setOpen(true)} name="Create new Account" />
      <Modal isOpen={open}>
        <FormAccount onClose={() => setOpen(false)} />
      </Modal>
      {loading ? <p>Loading...</p> : null}
      <div className="container-body">
        {accounts
          ? accounts.map((account, index) => <Account key={`account-${index}`} account={account} />)
          : null}
      </div>
    </>
  );
};

export default ListsAccounts;
