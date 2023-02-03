import { createSlice } from "@reduxjs/toolkit";
import { getAccountsByeIdUser, createAccount, updateStateAccount } from "../actions/accountActions";

const initialState = {
  loading: false,
  errors: null,
  accounts: [],
  notification: null,
  request: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    signOutAccount: () => {
      return initialState;
    },
    clearNotification: (state) => {
      return { ...state, notification: null, errors: false };
    },
    consultAccounts: (state) => {
      return { ...state, request: true };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccountsByeIdUser.pending, (state) => ({
        ...state,
        loading: true,
        request: false,
      }))
      .addCase(getAccountsByeIdUser.fulfilled, (state, action) => {
        const accounts = action.payload ? action.payload : [];
        return { ...state, loading: false, accounts };
      })
      .addCase(getAccountsByeIdUser.rejected, (state, action) => {
        return { ...state, loading: false, errors: action.payload };
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
          accounts: [...state.accounts, account],
          notification: message,
        };
      })
      .addCase(createAccount.rejected, (state, action) => {
        return { ...state, loading: false, errors: action.payload };
      });

    builder
      .addCase(updateStateAccount.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(updateStateAccount.fulfilled, (state, action) => {
        const { message, idAccount } = action.payload;
        const accountFilter = state.accounts.filter((account) => account.idAccount !== idAccount);
        return {
          ...state,
          loading: false,
          accounts: [...accountFilter],
          notification: message,
        };
      })
      .addCase(updateStateAccount.rejected, (state, action) => {
        return { ...state, loading: false, errors: action.payload };
      });
  },
});

export const { signOutAccount, clearNotification, consultAccounts } = accountSlice.actions;
export default accountSlice.reducer;
