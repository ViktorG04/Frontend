import { createAsyncThunk } from "@reduxjs/toolkit";
import { methodGET, methodPOST, methodPUT } from "../../api/methodAPI"

export const getAccountsByeIdUser = createAsyncThunk(
  "account/allAccounts",
  async (getValues, { rejectWithValue }) => {
    const { idUser, token } = getValues;
    try {
      const response = await methodGET({ url: `accounts/${idUser}`, token })
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  });

export const createAccount = createAsyncThunk(
  "account/create",
  async (accountInfo, { rejectWithValue }) => {
    const { token, ...data } = accountInfo;
    try {
      const response = await methodPOST({ url: `accounts`, data, token })
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateStateAccount = createAsyncThunk(
  "account/delete",
  async (accountInfo, { rejectWithValue }) => {
    const { token, idAccount } = accountInfo;
    try {
      const response = await methodPUT({ url: `accounts/${idAccount}`, token })
      return response;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
);
