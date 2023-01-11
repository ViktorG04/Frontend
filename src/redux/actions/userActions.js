import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config/config";
import { getAccountsByeIdUser } from "./accountActions";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (userInfo, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth`, userInfo);
      const { token, idUser: id } = response.data;

      dispatch(getAccountsByeIdUser({ id, token }));

      return response.data;
    } catch (error) {
      if (!error.response) {
        const errorRequest = {
          data: { msg: "Service Unavailable" },
          status: "503",
        };
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

export const updateUser = createAsyncThunk(
  "user/updated",
  async (userInfo, { rejectWithValue }) => {
    const { id, newPassword, token } = userInfo;
    try {
      const response = await axios.put(`${API_URL}/user/${id}`, { newPassword });
      return response.data;
    } catch (error) {
      if (!error.response) {
        const errorRequest = {
          data: { msg: "Service Unavailable" },
          status: "503",
        };
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
