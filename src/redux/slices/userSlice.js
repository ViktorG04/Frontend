import { createSlice } from "@reduxjs/toolkit";
import { signUp, updateUser } from "../actions/userActions";

const initialState = {
  user: {},
  token: null,
  isLogged: false,
  error: null,
  loading: false,
  notification: null,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: () => {
      return initialState;
    },
    clearNotification: (state) => {
      return { ...state, notification: null, error: null };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(signUp.fulfilled, (state, action) => {
        const { token, ...user } = action.payload;

        return { ...state, isLogged: true, loading: false, user, token, error: null };
      })
      .addCase(signUp.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload };
      });

    builder
      .addCase(updateUser.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(updateUser.fulfilled, (state, action) => {
        const { message, newPassword } = action.payload;
        return {
          ...state,
          loading: false,
          notification: message,
          user: { ...state.user, password: newPassword },
          error: null,
        };
      })
      .addCase(updateUser.rejected, (state, action) => {
        return { ...state, isLogged: false, loading: false, error: action.payload };
      });
  },
});

export const { signOut, clearNotification } = userSlice.actions;

export default userSlice.reducer;
