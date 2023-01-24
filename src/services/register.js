import apiInstance from "./axiosConfig";
import { API_URL } from "../config/config";

export const registered = async (profileInfo) => {
  const response = await apiInstance.post(`${API_URL}/register`, profileInfo);
  return response.data;
};
