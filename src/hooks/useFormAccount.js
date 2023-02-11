import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../redux";
import { getTyMoney } from "../services/money";
import toast from "react-hot-toast";
import { clearNotification } from "../redux/slices/accountSlice";
import useReduxData from "./useReduxData";

const useFormAccount = (reset, onCloseModal, open) => {
  const [typeMoney, setTypeMoney] = useState([]);
  const { token, idUser, notification, errors } = useReduxData();

  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    try {
      const money = await getTyMoney(token);
      setTypeMoney(money);
    } catch (error) {
      toast.error(error);
    }
  }, [token]);

  useEffect(() => {
    if (open) {
      fetchData();
    }
  }, [fetchData, open]);

  useEffect(() => {
    if (notification) {
      toast.success(notification);
      onCloseModal();
      reset();
      dispatch(clearNotification());
    }
  }, [notification, onCloseModal, dispatch, reset]);

  useEffect(() => {
    if (errors) {
      toast.error(errors);
      dispatch(clearNotification());
    }
  }, [errors, dispatch]);

  const onHandleSubmit = (data) => {
    dispatch(createAccount({ idUser, ...data, token }));
  };

  const onHandleClick = () => {
    reset();
    onCloseModal();
  };

  return { typeMoney, onHandleSubmit, onHandleClick };
};

export default useFormAccount;
