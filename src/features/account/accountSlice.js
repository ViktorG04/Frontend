import { createSlice } from "@reduxjs/toolkit";
import { getAccountsByeIdUser, createAccount } from "./actions";

const initialState = { loading: false, request: false, errors: undefined, accounts: [] };

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAccountsByeIdUser.pending, (state) => ({
      loading: true,
      ...state,
    }));

    builder.addCase(getAccountsByeIdUser.fulfilled, (_, action) => {
      let accounts = [];
      if (action.payload) {
        accounts = action.payload;
      }
      return { loading: false, request: true, accounts };
    });

    builder.addCase(getAccountsByeIdUser.rejected, (state, action) => {
      const { data, status } = action.payload;
      const error = `Status: ${status} - ${data}`;
      return { loading: false, request: true, errors: error, ...state };
    });

    builder.addCase(createAccount.pending, (state) => ({
      loading: true,
      ...state,
    }));

    builder.addCase(createAccount.fulfilled, (state, action) => ({
      loading: false,
      request: true,
    }));

    builder.addCase(createAccount.rejected, (state, action) => {
      const { data, status } = action.payload;
      const error = `Status: ${status} - ${data.msg}`;

      return { errors: error, ...state };
    });
  },
});

export const { addAccount, updateAccount, getAccounts } = accountSlice.actions;

export default accountSlice.reducer;
