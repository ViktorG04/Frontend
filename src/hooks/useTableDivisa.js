import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getCurrency } from "../services/money";

const useTableDivisa = () => {
  const [currencies, setCurrencies] = useState([]);
  const { token } = useSelector(state => state.auth);

  const fetchData = useCallback(async () => {
    try {
      const data = await getCurrency(token);
      setCurrencies(data);
    } catch (error) {
      toast.error(error);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { currencies };
}

export default useTableDivisa
