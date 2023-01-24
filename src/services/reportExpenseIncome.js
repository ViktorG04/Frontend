import apiInstance from "./axiosConfig";
import { API_URL } from "../config/config";

export const reportExpenseIncome = async (reportInfo) => {
  const { token, ...data } = reportInfo;
  const headers = { 'x-token': token }
  const response = await apiInstance.post(`${API_URL}/expenseIncome`, data, headers);
  return response.data;
};
