import { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import { getExchanges } from "../services/exchange";
import { getTyMoney } from "../services/money";
import useReduxData from "./useReduxData";

const useDivisa = (watch, reset) => {
  const { token } = useReduxData();

  const [change, setChange] = useState("");
  const [money, setMoney] = useState([]);

  const symbolFrom = watch("from");
  const symbolTo = watch("to");
  const consultMoney = useCallback(async () => {
    try {
      const result = await getTyMoney(token);
      setMoney(result);
    } catch (error) {
      toast.error(error);
    }
  }, [token]);

  useEffect(() => {
    consultMoney();
  }, [consultMoney]);

  const onHandleSubmit = async (data) => {
    try {
      const response = await toast.promise(getExchanges({ ...data, token }), {
        loading: "Loading...",
        success: <b>Success!</b>,
      });
      const { exchange } = response;
      setChange(exchange);
    } catch (error) {
      toast.error();
    }
  };

  const onHandleClick = () => {
    reset();
    setChange("");
  };
  return { change, money, symbolFrom, symbolTo, onHandleSubmit, onHandleClick };
};

export default useDivisa;
