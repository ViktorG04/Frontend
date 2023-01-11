import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar";
import ProfileImage from "../components/dashboard/ProfileImage";
import TopNavbar from "../components/dashboard/TopNavbar";
import "./css/dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="header">
        <TopNavbar />
      </div>
      <div className="sidebar">
        <ProfileImage />
        <Navbar />
      </div>

      <div className="section">
        <Outlet />
      </div>
      <div className="footer">
        <p>footer</p>
      </div>
    </div>
  );
}

export default Dashboard;
