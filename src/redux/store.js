import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import userReducer from "./slices/userSlice";
import accountReducer from "./slices/accountSlice";
import { STORE_KEY } from "../config/config";

const allReducers = combineReducers({
  auth: userReducer,
  accounts: accountReducer,
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: STORE_KEY,
      onError: (err) => {
        console.log("err", err);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
