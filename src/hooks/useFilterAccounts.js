import { useState, useEffect } from 'react'

const useFilterAccounts = ({ personalAccounts, idAccount, accounts }) => {

  const [accountOut, setAccountOut] = useState({});

  useEffect(() => {
    if (personalAccounts) {
      const data = accounts.filter(account => account.idAccount !== idAccount)
      setAccountOut(data);
    }
  }, [personalAccounts, idAccount, accounts])

  return { accountOut }
}

export default useFilterAccounts
