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

/**
 * send data to endpoint
 * @param {object} "token, infoTransfer"
 * @returns {Promise<axios>} "response endpoint"
 */
export const transfers = async (infoTransfer) => {
  const { token, data } = infoTransfer;
  const response = await apiInstance.post(`${API_URL}/transfers`, data)
  return response.data
}