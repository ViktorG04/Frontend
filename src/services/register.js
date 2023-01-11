import axios from "axios";
import { API_URL } from "../config/config";

export const registered = async (profileInfo) => {
  try {
    const response = await axios.post(`${API_URL}/register`, profileInfo);
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
