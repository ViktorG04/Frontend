import { API_URL } from "../config/config";
import apiInstance from "../api/axiosConfig";

export const methodGET = async ({ url, token }) => {
  const config = {
    headers: {
      'Authorization': token
    }
  };
  const response = await apiInstance.get(`${API_URL}/${url}`, config);
  return response.data;
};

export const methodPOST = async ({ url, data, token }) => {

  if (!token) {
    const response = await apiInstance.post(`${API_URL}/${url}`, data);
    return response.data;
  }
  const config = {
    headers: {
      'Authorization': token
    }
  };
  const response = await apiInstance.post(`${API_URL}/${url}`, data, config);
  return response.data;
};

export const methodPUT = async ({ url, data, token }) => {
  const config = {
    headers: {
      'Authorization': token
    }
  };
  const response = await apiInstance.put(`${API_URL}/${url}`, data, config);
  return response.data;
};