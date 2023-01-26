import { API_URL } from "../config/config";
import apiInstance from "./axiosConfig";

export const getCategories = async () => {
  const response = await apiInstance.get(`${API_URL}/categories`);
  return response.data;
};

export const getTypeTransfer = async () => {
  const response = await apiInstance.get(`${API_URL}/transfers`);
  return response.data;

};

export const transfers = async (infoTransfer) => {
  const { token, data } = infoTransfer;
  const config = {
    headers: {
      'x-token': token
    }
  }
  const response = await apiInstance.post(`${API_URL}/transfers`, data, config)
  return response.data
}