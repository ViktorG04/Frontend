import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from "./views/Accounts";
import { LoginFormWithControlled } from "./views/Login";
import Register from "./views/Register";
import Profile from "./components/user/Profile";
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
      <div className="hero">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route index element={<LoginFormWithControlled />} />
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
      </div>
    </>
  );
}

export default App;
