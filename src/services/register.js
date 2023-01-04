import axios from "axios";
import config from "../config/config";

const url = config.api;

export const registered = async (profileInfo) => {
  try {
    const response = await axios.post(`${url}/register`, profileInfo);
    return response.data;
  } catch (error) {
    const { data, request } = error.response;
    const errorMessage = `Status: ${request.status} - ${data.msg}`;
    throw new Error(errorMessage);
  }
};
