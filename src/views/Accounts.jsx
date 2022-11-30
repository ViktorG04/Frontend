import React from 'react'
import { Outlet, Link} from 'react-router-dom';
import ListAccounts from '../components/Accounts/ListAccounts';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { decrypt } from '../utils/encrypt-decrypt';

const Accounts = () => {

  const useLocalStoreEncrypt = useContext(UserContext);
  const userStore = JSON.parse(decrypt(useLocalStoreEncrypt.userLogin));

  return (
    <div>
      <h1>Bank Accounts</h1>
      <Link to={`AddAccount/${userStore.id}`} >Add Acount</Link>
      <Outlet/>
      <ListAccounts/>
    </div>
  );
};

export default Accounts;
