import React, { useEffect, useState, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Account from "../components/accounts/Account";
import UserContext from "../context/UserContext";
import { decrypt } from "../utils/encrypt-decrypt";
import Button from "../components/formComponents/Button";
import {  accounts, divisa } from "../data";
import Divisa from "../components/accounts/Divisa";

const jsonData = accounts;

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [divisas, setDivisas] = useState([]);

  const navigate = useNavigate();

  const useLocalStoreEncrypt = useContext(UserContext);
  const userStore = JSON.parse(decrypt(useLocalStoreEncrypt.userLogin));

  useEffect(() => {
    //get api request

    setAccounts(jsonData);
    setDivisas(divisa);
  }, []);

  const listAccounts = accounts.map((account, index) => (
    <Account key={index} objet={account} />
  ));

  const listDivisas = divisas.map((divisa, index) =>(
    <Divisa key={index} data={divisa} />
  ));

  const handleClick = () => {
    navigate(`AddAccount/${userStore.id}`);
  };

  return (
    <div>
      <h1>Personal Accounts</h1>
      <Button type="reset" onClick={handleClick} name="Add new Account" />
      <Outlet />
      {listAccounts }
      <div>
        <h2>DIVISA</h2>
        {listDivisas}
      </div>
      
    </div>
  );
};

export default Accounts;
