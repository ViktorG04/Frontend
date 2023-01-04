import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import accountReducer from "../features/account/accountSlice";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    accounts: accountReducer,
  },
});
