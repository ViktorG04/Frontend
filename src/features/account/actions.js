import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config/config";

const url = config.api;

export const getAccountsByeIdUser = createAsyncThunk(
  "account/allAccounts",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url}/accounts/${id}`);
      return response.data;
    } catch (error) {
      const { data, request } = error.response;
      const errors = {
        data,
        status: request.status,
      };
      return rejectWithValue(errors);
    }
  }
);

export const createAccount = createAsyncThunk(
  "account/create",
  async (accountInfo, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/accounts`, accountInfo);
      dispatch(getAccountsByeIdUser());
      return response.data;
    } catch (error) {
      const { data, request } = error.response;
      const errors = {
        data,
        status: request.status,
      };
      return rejectWithValue(errors);
    }
  }
);
