import { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import { getExternalAccounts } from "../services/accounts";
import useReduxData from "./useReduxData";

const useGetAccounts = ({ anotherAccounts, personalAccounts, idAccount }) => {
  const [destinyAccounts, setDestinyAccounts] = useState([]);

  const { token, idUser, accounts } = useReduxData();

  const getAccounts = useCallback(async () => {
    try {
      const data = await toast.promise(getExternalAccounts(idUser, token), {
        loading: "Loading...",
        success: <b>Success!</b>,
      });
      setDestinyAccounts(data);
    } catch (error) {
      toast.error(error);
    }
  }, [idUser, token]);

  useEffect(() => {
    if (personalAccounts) {
      const filtered = accounts.filter((account) => account.idAccount !== idAccount);
      setDestinyAccounts(filtered);
    }
  }, [accounts, personalAccounts, idAccount]);

  useEffect(() => {
    if (anotherAccounts) {
      getAccounts();
    }
  }, [getAccounts, anotherAccounts]);

  return { destinyAccounts };
};

export default useGetAccounts;
