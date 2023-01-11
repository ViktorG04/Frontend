import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config/config";

export const getAccountsByeIdUser = createAsyncThunk(
  "account/allAccounts",
  async (getValues, { rejectWithValue }) => {
    const { id, token } = getValues;
    try {
      const response = await axios.get(`${API_URL}/accounts/${id}`);
      return response.data;
    } catch (error) {
      if (!error.response) {
        const errorRequest = {
          data: "Service Unavailable",
          status: "503",
        };
        axios.Cancel();
        return rejectWithValue(errorRequest);
      }

      const { data, request } = error.response;
      const errorResponse = {
        data,
        status: request.status,
      };
      return rejectWithValue(errorResponse);
    }
  }
);

export const createAccount = createAsyncThunk(
  "account/create",
  async (accountInfo, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/accounts`, accountInfo);
      return response.data;
    } catch (error) {
      if (!error.response) {
        const errorRequest = {
          data: "Service Unavailable",
          status: "503",
        };
        axios.Cancel();
        return rejectWithValue(errorRequest);
      }

      const { data, request } = error.response;
      const errors = {
        data,
        status: request.status,
      };
      return rejectWithValue(errors);
    }
  }
);
