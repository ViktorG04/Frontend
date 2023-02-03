import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAccountsByeIdUser } from "../redux";
import useReduxData from "./useReduxData";

const useListAccount = () => {
  const [balance, setBalance] = useState(0);

  const { token, idUser, accounts, loading, request } = useReduxData();

  const dispatch = useDispatch();

  useEffect(() => {
    if (request) {
      dispatch(getAccountsByeIdUser({ idUser, token }));
    }
  }, [dispatch, idUser, token, request]);

  useEffect(() => {
    if (accounts.length) {
      const allAvailable = accounts.reduce((acc, account) => {
        return acc + account.available;
      }, 0);
      setBalance(allAvailable);
    }
  }, [accounts]);

  return { loading, balance, accounts };
};

export default useListAccount;
