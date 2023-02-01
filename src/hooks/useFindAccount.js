import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

const useFindAccount = ({ idAccount }) => {

  const { accounts, errors, notification } = useSelector(state => state.accounts);
  const [accountFound, setAccountFound] = useState({});

  useEffect(() => {
    if (idAccount) {
      const result = accounts.find(
        (account) => account.idAccount === idAccount
      );
      setAccountFound({ ...result });
    }

  }, [idAccount, accounts]);

  return { accountFound, errors, notification };

}

export default useFindAccount;
