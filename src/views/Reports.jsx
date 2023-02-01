import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { consultReports } from "../services/reportExpenseIncome";

const initialState = { idAccount: "", idCategory: "", date: "" };

const Reports = () => {
  const { token } = useSelector((state) => state.auth);

  const [params, setParams] = useState(initialState);
  const [reports, setReports] = useState({});

  const fetchData = useCallback(async () => {
    const data = await consultReports({ token, params });
    setReports(data);
    console.log(data);
  }, [token, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <div>Reports</div>;
};

export default Reports;
