import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config/config";

const URL = config.api;

export const SignUp = createAsyncThunk("auth/signUp", async (userInfo, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${URL}/auth`, userInfo);
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
});

export const updateUser = createAsyncThunk(
  "user/updated",
  async (userInfo, { rejectWithValue }) => {
    const { id, newPassword, token } = userInfo;
    try {
      const response = await axios.put(`${URL}/user/${id}`, { newPassword });
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
