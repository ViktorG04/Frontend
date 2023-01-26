import { API_URL } from "../config/config";
import apiInstance from "./axiosConfig";

export const getExternalAccounts = async (idUser, token) => {
  const config = {
    headers: {
      'x-token': token
    }
  }
  const response = await apiInstance.get(`${API_URL}/accounts/transfer/${idUser}`, config);
  return response.data;
};

export const getInfoAccountById = async (idAccount, token) => {
  const config = {
    headers: {
      'x-token': token
    }
  }
  const response = await apiInstance.get(`${API_URL}/accounts/info/${idAccount}`, config);
  return response.data;
};
