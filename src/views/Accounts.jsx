import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate} from 'react-router-dom';
import Account from '../components/Accounts/Account';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { decrypt } from '../utils/encrypt-decrypt';

const jsonAccounts = [{
  idAccount: 1,
  bankName: 'promerica bank',
  numberACC: 121213122313312,
  dateExp: '2022-09-12',
  credit: 1200,
  idUser: 1,
  idState: 1,
  idTypeMoney: 1
},
{
  idAccount: 2,
  bankName: 'promerica bank',
  numberACC: 121213122313312,
  dateExp: '2022-09-12',
  credit: 1200,
  idUser: 1,
  idState: 1,
  idTypeMoney: 1
},
{
  idAccount: 3,
  bankName: 'promerica bank',
  numberACC: 121213122313312,
  dateExp: '2022-09-12',
  credit: 1200,
  idUser: 1,
  idState: 1,
  idTypeMoney: 1
}]


const Accounts = () => {

  const [accounts, setAaccounts ] = useState([]);
  const [ state, setState ] = useState();

  const navigate = useNavigate();

  useEffect(() =>{
    //get api request

    setAaccounts(jsonAccounts);
    setState(false);
  },[])

  const handleClick = () =>{
    navigate(`AddAccount/${userStore.id}`);
    setState(true);
  };


  const listAccounts = accounts.map((account, index) =>(<Account key={index} objet={account}/> ));

  const useLocalStoreEncrypt = useContext(UserContext);
  const userStore = JSON.parse(decrypt(useLocalStoreEncrypt.userLogin));

  return (
    <div>
      <h1>Bank Accounts</h1>
      <button onClick={handleClick}>Add Acount</button>
      {state? <Outlet/> : listAccounts}
    </div>
  );
};

export default Accounts;
