import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from "./views/Accounts";
import Login from "./views/Login";
import Register from "./views/Register";
import Profile from "./views/Profile";
import AccountTransfer from "./components/transfers/AccountTransfer";
import { Toaster } from "react-hot-toast";
import ExpenseIncome from "./components/expense-incomes/ExpenseIncome";
import Dashboard from "./views/Dashboard";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <>
      <Toaster />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/*" element={<Dashboard />}>
              <Route path="accounts" element={<Accounts />} />
              <Route path="profile" element={<Profile />} />
              <Route path="transfers" element={<AccountTransfer />} />
              <Route path="expenses-income" element={<ExpenseIncome />} />
              <Route path="history" element={<div>history view</div>} />
            </Route>
            <Route path="*" element={<div>404 NOT FOUND</div>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
