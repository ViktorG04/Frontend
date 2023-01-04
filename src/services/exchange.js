import axios from "axios";
import config from "../config/config";

export const getExchanges = async (TransferInfo) => {
  try {
    const response = await axios.get(`${url}/exchange`, TransferInfo);
    return response.data;
  } catch (error) {
    const { data, request } = error.response;
    const errorMessage = `Status: ${request.status} - ${data.msg}`;
    throw new Error(errorMessage);
  }
};
