import { createSlice } from "@reduxjs/toolkit";
import { getAccountsByeIdUser, createAccount } from "../actions/accountActions";

const initialState = {
  loading: false,
  request: false,
  errors: undefined,
  accounts: [],
  notification: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccountsByeIdUser.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getAccountsByeIdUser.fulfilled, (state, action) => {
        let accounts = [];
        if (action.payload) {
          accounts = action.payload;
        }
        return { ...state, loading: false, request: true, accounts };
      })
      .addCase(getAccountsByeIdUser.rejected, (state, action) => {
        const { data, status } = action.payload;
        const error = `Status: ${status} - ${data}`;
        return { ...state, loading: false, errors: error };
      });

    builder
      .addCase(createAccount.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(createAccount.fulfilled, (state, action) => {
        const { message, account } = action.payload;
        return {
          ...state,
          loading: false,
          request: true,
          accounts: [...state.accounts, account],
          notification: message,
        };
      })
      .addCase(createAccount.rejected, (state, action) => {
        const { data, status } = action.payload;
        const message = data?.msg ? `Status: ${status} - ${data.msg}` : data.errors;
        return { ...state, loading: false, request: false, errors: message };
      });
  },
});

export default accountSlice.reducer;
