import axios from "axios";
import { API_URL } from "../config/config";

export const getExchanges = async (transferInfo) => {
  const { token, ...data } = transferInfo
  try {
    const response = await axios.post(`${API_URL}exchange`, data);
    return response.data;
  } catch (error) {

    console.log(error)
    if (!error.response) {
      throw new Error("Status 503 - Service Unavailable ");
    }

    const { data, request } = error.response;
    const errorMessage = `Status: ${request.status} - ${data.msg}`;
    throw new Error(errorMessage);
  }
};
