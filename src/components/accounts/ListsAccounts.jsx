import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAccountsByeIdUser } from "../../features/account/actions";
import Account from "./Account";
import Button from "../formComponents/button/Button";
import FormAccount from "./FormAccount";
import Modal from "../modal/Modal";
import "./css/listAccounts.css";
import { toast } from "react-hot-toast";

const ListsAccounts = () => {
  const dispatch = useDispatch();

  const { user, userToken } = useSelector((state) => state.auth);
  const { idUser } = user;
  const { loading, request, errors, accounts } = useSelector((state) => state.accounts);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getAccountsByeIdUser({ idUser, userToken }));

    if (errors) {
      toast.error(errors);
    }

    if (request && !accounts.length) {
      toast.success("The user has no accounts");
    }
  }, [dispatch, getAccountsByeIdUser, errors, request]);

  return (
    <div className="container-accountList">
      <h1>Personal Accounts</h1>
      <Button onClick={() => setOpen(true)} name="Create new Account" />
      <Modal isOpen={open}>
        <FormAccount onClose={() => setOpen(false)} />
      </Modal>
      {loading && <p>Loading...</p>}
      <div className="container-body">
        {accounts &&
          accounts.map((account, index) => <Account key={`account-${index}`} account={account} />)}
      </div>
    </div>
  );
};

export default ListsAccounts;
