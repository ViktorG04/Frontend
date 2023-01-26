import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../services/axiosConfig";
import { API_URL } from "../../config/config";

export const getAccountsByeIdUser = createAsyncThunk(
  "account/allAccounts",
  async (getValues, { rejectWithValue }) => {
    const { idUser, token } = getValues;
    const config = {
      headers: {
        'x-token': token
      }
    }
    try {
      const response = await apiInstance.get(`${API_URL}/accounts/${idUser}`, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  });

export const createAccount = createAsyncThunk(
  "account/create",
  async (accountInfo, { rejectWithValue }) => {
    const { token, ...data } = accountInfo;
    const config = {
      headers: {
        'x-token': token
      }
    }
    try {
      const response = await apiInstance.post(`${API_URL}/accounts`, data, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
