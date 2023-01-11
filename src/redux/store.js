import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import accountReducer from "./slices/accountSlice";
import outletReducer from "./slices/outlet";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    accounts: accountReducer,
    outletState: outletReducer,
  },
});
