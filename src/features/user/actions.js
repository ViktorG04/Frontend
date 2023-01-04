import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config/config";

const URL = config.api;

export const SignUp = createAsyncThunk("auth/signUp", async (userInfo, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${URL}/auth`, userInfo);
    return response.data;
  } catch (error) {
    const { data, request } = error.response;
    const errors = {
      data,
      status: request.status,
    };
    return rejectWithValue(errors);
  }
});

export const updateUser = createAsyncThunk("user/updated", async (userInfo) => {
  const { id, password } = userInfo;
  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(password),
  };
  console.log(options);
  const response = await fetch(`${URL}/user/${id}`, options);
  const data = await response.json();
  return data;
});
