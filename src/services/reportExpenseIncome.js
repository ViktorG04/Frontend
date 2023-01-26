import apiInstance from "./axiosConfig";
import { API_URL } from "../config/config";

export const reportExpenseIncome = async (reportInfo) => {
  const { token, ...data } = reportInfo;
  const config = {
    headers: {
      'x-token': token
    }
  }
  const response = await apiInstance.post(`${API_URL}/expenseIncome`, data, config);
  return response.data;
};
