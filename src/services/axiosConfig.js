import axios from "axios";
import { API_URL } from "../config/config";

const apiInstance = axios.create({ baseURL: API_URL });

apiInstance.interceptors.response.use(
  (response) => response,
  (err) => {
    if (!err.response) {
      return Promise.reject("Status 503 - Service Unavailable");
    }

    console.log(err.response)
    const errors = err.response.data;
    if (errors?.message) {
      return Promise.reject(errors.message);
    }
    return Promise.reject(errors);
  }
)

export default apiInstance;