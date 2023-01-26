import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../services/axiosConfig";
import { API_URL } from "../../config/config";

export const signUp = createAsyncThunk("auth/signUp", async (userInfo, { rejectWithValue }) => {
  try {
    const response = await apiInstance.post(`${API_URL}/auth`, userInfo);
    return response.data;
  } catch (error) {
    console.log(error)
    return rejectWithValue(error);
  }
});

export const updateUser = createAsyncThunk(
  "user/updated",
  async (userInfo, { rejectWithValue }) => {
    const { id, newPassword, token } = userInfo;
    const config = {
      headers: {
        'x-token': token
      }
    }
    try {
      const response = await apiInstance.put(`${API_URL}/user/${id}`, { newPassword }, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
