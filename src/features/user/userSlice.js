import { createSlice } from "@reduxjs/toolkit";
import { SignUp, updateUser } from "./actions";

const initialState = { user: [], userToken: null, isLogged: false, error: null, loading: false };

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SignUp.pending, (state) => ({
      loading: true,
      ...state,
    }));
    builder.addCase(SignUp.fulfilled, (_, action) => {
      const { token, ...user } = action.payload;
      return { isLogged: true, user: user, userToken: token };
    });
    builder.addCase(SignUp.rejected, (_, action) => {
      const { data, status } = action.payload;
      const error = `Status: ${status} - ${data.msg}`;

      return { isLogged: false, loading: false, error };
    });
  },
});

//export const { addUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
