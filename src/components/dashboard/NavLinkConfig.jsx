import React from "react";
import { NavLink } from "react-router-dom";
import "./css/navLink.css";

const NavLinkConfig = ({ link }) => {
  const { to, iconName, linkName } = link;
  return (
    <NavLink className="NavLink" to={to}>
      <span>
        <i className={iconName}></i>
      </span>
      <span>{linkName}</span>
    </NavLink>
  );
};

export default NavLinkConfig;
