import { API_URL } from "../config/config";
import apiInstance from "./axiosConfig";

export const getExternalAccounts = async (idUser, token) => {
  console.log(idUser, token)
  const headers = { 'x-token': token }
  const response = await apiInstance.get(`${API_URL}/accounts/transfer/${idUser}`, headers);
  return response.data;
};

export const getInfoAccountById = async ({ idAccount, token }) => {
  const headers = { 'x-token': token }
  const response = await apiInstance.get(`${API_URL}/accounts/info/${idAccount}`, headers);
  return response.data;
};
