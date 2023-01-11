import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/slices/userSlice";

import "./css/navbar.css";

const NavLinkConfig = ({ link }) => {
  const { to, iconName, linkName } = link;

  const dispatch = useDispatch();
  const onHandleClick = () => {
    dispatch(signOut());
  };

  return (
    <NavLink className="NavLink" to={to}>
      <span>
        <i className={iconName}></i>
      </span>
      {linkName !== "Sing out" ? (
        <span className="name">{linkName}</span>
      ) : (
        <span className="name" onClick={onHandleClick}>
          {linkName}
        </span>
      )}
    </NavLink>
  );
};

export default NavLinkConfig;
