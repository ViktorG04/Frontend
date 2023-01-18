import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./views/Login";
import Register from "./views/Register";
import Accounts from "./views/Accounts";
import Profile from "./views/Profile";
import Account from "./views/Account";
import ExpenseIncome from "./components/expense-incomes/ExpenseIncome";
import Reports from "./views/Reports";
import FormTransfers from "./components/transfers/FormTransfers";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Accounts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/account/:idAccount" element={<Account />} />
            <Route path="/transfers" element={<FormTransfers />} />
            <Route path="/report/:idAccount" element={<ExpenseIncome />} />
            <Route path="/history" element={<Reports />} />
          </Route>
          <Route path="*" element={<div>404 NOT FOUND</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
