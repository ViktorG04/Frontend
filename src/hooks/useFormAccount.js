import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAccount } from "../redux";
import { clearNotification } from "../redux/slices/accountSlice";
import { getTyMoney } from "../services/money";

import toast from "react-hot-toast";

const useFormAccount = (onClose) => {
  const [typeMoney, setTypeMoney] = useState([]);

  const {
    user: { idUser },
    token
  } = useSelector((state) => state.auth);
  const { errors, notification } = useSelector((state) => state.accounts);

  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    try {
      const money = await getTyMoney();
      setTypeMoney(money);
    } catch (error) {
      toast.error(error)
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (errors) {
      toast.error(errors);
    }
  }, [errors]);

  useEffect(() => {
    if (notification) {
      toast.success(notification);
      onClose();
      dispatch(clearNotification());
    }
  }, [notification, onClose, dispatch]);

  const onHandleSubmit = (data) => {
    dispatch(createAccount({ idUser, ...data, token }));
  };

  return { typeMoney, onHandleSubmit };
};

export default useFormAccount;
