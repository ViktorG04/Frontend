import axios from "axios";
import { API_URL } from "../config/config";

export const getExchanges = async (TransferInfo) => {
  try {
    const response = await axios.get(`${API_URL}/exchange`, TransferInfo);
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
