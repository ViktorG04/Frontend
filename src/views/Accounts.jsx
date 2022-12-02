import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Account from "../components/accounts/Account";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { decrypt } from "../utils/encrypt-decrypt";
import Button from "../components/formComponents/Button";

const jsonAccounts = [
  {
    idAccount: 1,
    bankName: "Promerica Bank",
    numberAccount: 121213122313312,
    dateExpiration: "2022-09-12",
    credit: 1200,
    idUser: 1,
    idState: 1,
    divisa: "dollar",
    expensive: 300,
    income: 50.0,
    available: 950,
  },
  {
    idAccount: 2,
    bankName: "Agricola bank",
    numberAccount: 121213122313312,
    dateExpiration: "2022-09-12",
    credit: 1200,
    idUser: 1,
    idState: 1,
    divisa: "euro",
    expensive: 300,
    income: 50.0,
    available: 950,
  },
  {
    idAccount: 3,
    bankName: "America bank",
    numberAccount: 121213122313312,
    dateExpiration: "2022-09-12",
    credit: 1200,
    idUser: 1,
    idState: 1,
    divisa: "dollar",
    expensive: 300,
    income: 50.0,
    available: 950,
  },
];

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [state, setState] = useState(false);

  const navigate = useNavigate();

  const useLocalStoreEncrypt = useContext(UserContext);
  const userStore = JSON.parse(decrypt(useLocalStoreEncrypt.userLogin));

  useEffect(() => {
    //get api request

    setAccounts(jsonAccounts);
    setState(false);
  }, []);

  const listAccounts = accounts.map((account, index) => (
    <Account key={index} objet={account} />
  ));

  const handleClick = () => {
    navigate(`AddAccount/${userStore.id}`);
    setState(true);
  };

  return (
    <div>
      <h1>Bank Accounts</h1>
      <Button type="reset" onClick={handleClick} name="Add new Account" />
      {console.log(state)}
      {state ? <Outlet state={useState}/> : listAccounts }
    </div>
  );
};

export default Accounts;
