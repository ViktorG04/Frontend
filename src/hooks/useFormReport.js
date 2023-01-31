import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getCategories, getTypeTransfer } from "../services/services";
import { reportExpenseIncome } from "../services/reportExpenseIncome";
import { EXPENSIVE_SELECTED } from "../config/config";

const useFormReport = (reset) => {
  const [select, setSelect] = useState({ transfers: [], categories: [] });
  const { token } = useSelector((state) => state.auth);
  const { accounts } = useSelector((state) => state.accounts);
  const { idAccount } = useParams();

  const navigate = useNavigate();

  const { numberAccount, available, expensive } = accounts.find(
    (account) => account.idAccount === idAccount
  );

  const fetchDataSelect = useCallback(async () => {
    try {
      const [transfers, categories] = await Promise.all([getTypeTransfer(token), getCategories(token)]);
      let selectTransfer = [];
      if (!expensive) {
        selectTransfer = [transfers[0]]
      } else if (!available) {
        selectTransfer = [transfers[1]]
      } else {
        selectTransfer = [...transfers];
      }
      setSelect({ transfers: selectTransfer, categories });
    } catch (error) {
      toast.error(error)
    }
  }, [token, expensive, available]);

  useEffect(() => {
    fetchDataSelect();
  }, [fetchDataSelect]);

  const onHandleSubmit = async (data) => {
    const total = parseFloat(data.amount);
    if (total > available && data.idTypeTransfer === EXPENSIVE_SELECTED) {
      return toast.error("Insufficient credit to add an expensive");
    };

    const sendData = { ...data, idAccount, token, };
    try {
      const request = await reportExpenseIncome(sendData);
      toast.success(request.message);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error);
    }
  };

  const onHandleClick = () => {
    reset();
    navigate("/dashboard");
  };

  return { select, numberAccount, onHandleSubmit, onHandleClick };
};

export default useFormReport;
