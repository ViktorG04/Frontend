import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getInfoAccountById } from "../services/accounts";
import Button from "../components/formComponents/button/Button";
import Modal from "../components/modal/Modal";

//import "./css/account.css";

const Account = () => {
  const [accountInfo, setAccountInfo] = useState({});
  const [account, setAccount] = useState({});

  const { token } = useSelector((state) => state.auth);

  const [openState, setOpenState] = useState(false);

  const navigate = useNavigate();
  const { idAccount } = useParams();

  const fetchData = useCallback(async () => {
    const data = await getInfoAccountById(idAccount, token);
    setAccount(data.account);
  }, [idAccount, token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onHandleClick = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="container-account">
        <p>{idAccount}</p>{" "}
        <button onClick={() => onHandleClick()}>Cancel</button>{" "}
        <Button
          type="button"
          name="de-register"
          onClick={() => {
            setOpenState(true);
          }}
        />
      </div>
      <Modal isOpen={openState}>
        <p>change state</p>
        <Button
          type="reset"
          name="cancel"
          onClick={() => {
            setOpenState(false);
          }}
        />
      </Modal>
    </>
  );
};

export default Account;
