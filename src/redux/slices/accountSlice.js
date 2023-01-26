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
  reducers: {
    singOutAccount: () => {
      return initialState;
    }
  },
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
        return { ...state, loading: false, request: true, accounts, errors: null };
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
          request: true,
          accounts: [...state.accounts, account],
          notification: message,
          errors: null
        };
      })
      .addCase(createAccount.rejected, (state, action) => {
        return { ...state, loading: false, request: false, errors: action.payload };
      });
  },
});

export const { singOutAccount } = accountSlice.actions;
export default accountSlice.reducer;
