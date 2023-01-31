import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persist } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
