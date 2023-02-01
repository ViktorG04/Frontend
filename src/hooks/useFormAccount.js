import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAccount } from "../redux";
import { getTyMoney } from "../services/money";
import toast from "react-hot-toast";
import { clearNotification } from "../redux/slices/accountSlice";

const useFormAccount = (reset, onCloseModal, isModal) => {
  const [typeMoney, setTypeMoney] = useState([]);

  const {
    user: { idUser },
    token
  } = useSelector((state) => state.auth);
  const { errors, notification } = useSelector((state) => state.accounts);

  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    try {
      const money = await getTyMoney(token);
      setTypeMoney(money);
    } catch (error) {
      toast.error(error)
    }
  }, [token]);

  useEffect(() => {
    if (isModal) {
      fetchData();
    }
  }, [fetchData, isModal]);

  useEffect(() => {
    if (errors) {
      toast.error(errors);
    }
  }, [errors]);

  useEffect(() => {
    if (notification) {
      toast.success(notification);
      onCloseModal();
      reset();
      dispatch(clearNotification());
    }
  }, [notification, onCloseModal, dispatch, reset]);

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
