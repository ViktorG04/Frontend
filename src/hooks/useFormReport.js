import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getCategories, getTypeTransfer } from "../services/services";
import { reportExpenseIncome } from "../services/reportExpenseIncome";

const useFormReport = (reset, defaultValues) => {
  const [select, setSelect] = useState({ transfers: [], categories: [] });
  const { token } = useSelector((state) => state.auth);
  const { accounts } = useSelector((state) => state.accounts);
  const { idAccount } = useParams();

  const navigate = useNavigate();

  const { numberAccount, available, expensive } = accounts.find(
    (account) => account.idAccount === idAccount
  );

  const fetchDataSelect = useCallback(async () => {
    const [transfers, categories] = await Promise.all([getTypeTransfer(), getCategories()]);
    let selectTransfer = [];
    if (!expensive) {
      selectTransfer.push(transfers[0]);
    } else {
      selectTransfer = [...transfers];
    }
    setSelect({ transfers: selectTransfer, categories });
  }, [expensive]);

  useEffect(() => {
    fetchDataSelect();
  }, [fetchDataSelect]);

  const onHandleSubmit = async (data) => {
    let total = parseFloat(data.amount);
    if (total > available && data.idTypeTransfer === "1") {
      return toast.error("Insufficient credit to add an expensive");
    }
    const sendData = { idAccount, token, ...data };
    try {
      const request = await reportExpenseIncome(sendData);
      toast.success(request.message);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleClick = () => {
    reset(defaultValues);
    navigate("/dashboard");
  };

  return { select, numberAccount, onHandleSubmit, onHandleClick };
};

export default useFormReport;
