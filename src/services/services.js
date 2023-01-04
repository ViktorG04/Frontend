import axios from "axios";
import config from "../config/config";

const url = config.api;

export const getCategories = async () => {
  try {
    const response = await axios.get(`${url}/categories`);
    return response.data;
  } catch (error) {
    const { data, request } = error.response;
    const errorMessage = `Status: ${request.status} - ${data.msg}`;
    throw new Error(errorMessage);
  }
};

export const getTypeTransfer = async () => {
  try {
    const response = await axios.get(`${url}/transfers`);
    return response.data;
  } catch (error) {
    const { data, request } = error.response;
    const errorMessage = `Status: ${request.status} - ${data.msg}`;
    throw new Error(errorMessage);
  }
};
