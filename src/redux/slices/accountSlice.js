import { createSlice } from "@reduxjs/toolkit";
import { getAccountsByeIdUser, createAccount } from "../actions/accountActions";

const initialState = {
  loading: false,
  errors: null,
  accounts: [],
  notification: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    signOutAccount: () => {
      return initialState;
    },
    clearNotification: (state) => {
      return { ...state, notification: null, errors: false }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccountsByeIdUser.pending, (state) => ({
        ...state,
        loading: true,
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
  },
});

export const { signOutAccount, clearNotification } = accountSlice.actions;
export default accountSlice.reducer;
