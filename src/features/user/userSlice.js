import { createSlice } from "@reduxjs/toolkit";
import { SignUp, updateUser } from "./actions";

const data = {
  idUser: 1,
  name: "victor Garcia",
  email: "email@email.com",
  password: "12345678",
};

const initialState = {
  user: data,
  userToken: null,
  isLogged: false,
  error: null,
  loading: false,
  notification: null,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SignUp.pending, (state) => ({
      loading: true,
      ...state,
    }));
    builder.addCase(SignUp.fulfilled, (state, action) => {
      const { token, ...user } = action.payload;

      const { isLogged, loading, user: userDefault, userToken, ...dataState } = state;

      return { isLogged: true, loading: false, user: user, userToken: token, ...dataState };
    });
    builder.addCase(SignUp.rejected, (state, action) => {
      const { data, status } = action.payload;

      const { isLogged, loading, error, ...stateData } = state;

      const message = data?.msg ? `Status: ${status} - ${data.msg}` : data.errors;

      return { isLogged: false, loading: false, error: message, ...stateData };
    });

    builder.addCase(updateUser.pending, (state) => ({
      loading: true,
      ...state,
    }));
    builder.addCase(updateUser.fulfilled, (state, action) => {
      const { msg, newPassword } = action.payload;
      const { user, notification, loading, ...stateData } = state;
      const { password: currentPassword, ...userAuth } = user;

      const updatedUser = { password: newPassword, ...userAuth };

      return { user: updatedUser, loading: false, notification: msg, ...stateData };
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      const { data, status } = action.payload;

      const { isLogged, loading, error, ...stateData } = state;

      const message = data?.msg ? `Status: ${status} - ${data.msg}` : data.errors;

      return { isLogged: false, loading: false, error: message, ...stateData };
    });
  },
});

export default userSlice.reducer;
