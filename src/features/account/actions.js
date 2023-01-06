import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config/config";

const url = config.api;

export const getAccountsByeIdUser = createAsyncThunk(
  "account/allAccounts",
  async (getValues, { rejectWithValue }) => {
    const { id, token } = getValues;
    try {
      const response = await axios.get(`${url}/accounts/${id}`);
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
  async (accountInfo, { dispatch, rejectWithValue }) => {
    const idUser = accountInfo.idUser;
    try {
      const response = await axios.post(`${url}/accounts`, accountInfo);
      dispatch(getAccountsByeIdUser(idUser));
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
