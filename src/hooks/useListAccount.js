import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAccountsByeIdUser } from "../redux";
import useReduxData from "./useReduxData";
import { clearNotification } from "../redux/slices/accountSlice";
import { toast } from "react-hot-toast";
const useListAccount = () => {
  const [balance, setBalance] = useState(0);

  const { token, idUser, accounts, loading, request, errors } = useReduxData();

  const dispatch = useDispatch();

  useEffect(() => {
    if (request) {
      dispatch(getAccountsByeIdUser({ idUser, token }));
    }
  }, [dispatch, idUser, token, request]);

  useEffect(() => {
    if (errors) {
      toast.error(errors);
      dispatch(clearNotification());
    }
  }, [errors, dispatch]);

  useEffect(() => {
    if (accounts.length) {
      const allAvailable = accounts.reduce((acc, account) => {
        return acc + account.available;
      }, 0);
      const formatAvailable = allAvailable.toFixed(2);
      setBalance(formatAvailable);
    }
  }, [accounts]);

  return { loading, balance, accounts };
};

export default useListAccount;
