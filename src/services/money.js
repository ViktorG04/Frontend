import axios from "axios";
import config from "../config/config";

const url = config.api;

export const getTyMoney = async () => {
  try {
    const response = await axios.get(`${url}/money`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw new Error("Status 503 - Service Unavailable ");
    }

    const { data, request } = error.response;
    const errorMessage = `Status: ${request.status} - ${data.msg}`;
    throw new Error(errorMessage);
  }
};

export const getCurrency = async () => {
  try {
    const response = await axios.get(`${url}/currency`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw new Error("Status 503 - Service Unavailable ");
    }
    const { data, request } = error.response;
    const errorMessage = `Status: ${request.status} - ${data.msg}`;
    throw new Error(errorMessage);
  }
};
