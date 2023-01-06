import axios from "axios";
import config from "../config/config";

const url = config.api;

export const getAllAccounts = async () => {
  try {
    const response = await axios.get(`${url}/accounts`);
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