import { useState, useEffect, useCallback } from "react";
import { getCategories } from "../services/services";
import { consultReports } from "../services/reportExpenseIncome";
import { toast } from "react-hot-toast";
import useReduxData from "./useReduxData";

const initialState = { reports: [], success: false };
const defaultSelect = { selectAccounts: [], categories: [] };

const useReport = (reset) => {
  const { token, accounts } = useReduxData();

  const [consult, setConsult] = useState(initialState);

  const [select, setSelect] = useState(defaultSelect);

  const fetchDataSelect = useCallback(async () => {
    const data = await getCategories(token);
    const filter = accounts.map((account) => {
      const { idAccount: id, bankName: name } = account;
      return { id, name };
    });
    const selectAccounts = [{ id: "", name: "" }, ...filter];
    const categories = [{ id: "", name: "" }, ...data];
    setSelect({ selectAccounts, categories });
  }, [token, accounts]);

  useEffect(() => {
    fetchDataSelect();
  }, [fetchDataSelect]);

  const onHandleSubmit = async (data) => {
    try {
      const query = await toast.promise(consultReports({ token, data }), {
        loading: "generating report...",
        success: <b>Success!</b>,
      });
      setConsult({ reports: query, success: true });
    } catch (error) {
      setConsult(initialState);
      toast.error(error);
    }
  };

  const onHandleClick = () => {
    reset();
  };

  return { consult, select, onHandleSubmit, onHandleClick };
};

export default useReport;
