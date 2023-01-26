import { API_URL } from "../config/config";
import apiInstance from "./axiosConfig";

export const getExchanges = async (transferInfo) => {
  const { token, ...data } = transferInfo
  const config = {
    headers: {
      'x-token': token
    }
  }
  const response = await apiInstance.post(`${API_URL}/exchange`, data, config);
  return response.data;
};

export const getTyMoney = async () => {
  const response = await apiInstance.get(`${API_URL}/money`);
  return response.data;
};

export const getCurrency = async () => {
  const response = await apiInstance.get(`${API_URL}/currency`);
  return response.data;
};
