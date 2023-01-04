import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../features/account/actions";
import { getTyMoney } from "../services/money";

import toast from "react-hot-toast";

const useFormAccount = (onClose, reset, defaultValues) => {
  const dispatch = useDispatch();

  const [typeMoney, setTypeMoney] = useState([]);

  const fetchData = useCallback(async () => {
    const money = await getTyMoney();
    setTypeMoney(money);
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onHandleSubmit = (data) => {
    data.idUser = 1;
    const result = createAccount(data);
    dispatch(result);

    toast.success("created Account");
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const onHandleClick = () => {
    reset(defaultValues);
    onClose();
  };

  return { typeMoney, onHandleSubmit, onHandleClick };
};

export default useFormAccount;
