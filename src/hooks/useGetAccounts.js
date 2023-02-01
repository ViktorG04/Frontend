import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getExternalAccounts } from "../services/accounts";

const useGetAccounts = ({ anotherAccounts }) => {

  const [externalAccounts, setExternalAccounts] = useState([]);
  const {
    user: { idUser },
    token,
  } = useSelector((state) => state.auth);

  const findAccounts = useCallback(async () => {
    try {
      const data = await getExternalAccounts(idUser, token);
      setExternalAccounts(data);
    } catch (error) {
      toast.error(error);
    }
  }, [idUser, token]);

  useEffect(() => {
    if (anotherAccounts) {
      findAccounts();
    }
  }, [findAccounts, anotherAccounts]);
  return { externalAccounts }
}

export default useGetAccounts;