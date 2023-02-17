import { createAsyncThunk } from "@reduxjs/toolkit";
import { methodPOST, methodPUT } from "../../api/methodAPI";

export const signUp = createAsyncThunk("auth/signUp", async (userInfo, { rejectWithValue }) => {
  try {
    const response = await methodPOST({ url: "auth", data: userInfo });
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const updateUser = createAsyncThunk(
  "user/updated",
  async (userInfo, { rejectWithValue }) => {
    const { newPassword, token } = userInfo;
    try {
      const response = await methodPUT({ url: `user`, data: { newPassword }, token });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
