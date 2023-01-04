import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar";
import ProfileImage from "../components/dashboard/ProfileImage";
import TopNavbar from "../components/dashboard/TopNavbar";
import "./css/dashboard.css";
function Dashboard() {
  return (
    <>
      <div className="sidebar">
        <ProfileImage userName={"Name User Login"} />
        <Navbar />
      </div>
      <div className="navbar-container">
        <TopNavbar />
      </div>
      <div className="section">
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
