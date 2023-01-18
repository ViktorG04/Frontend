import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/slices/userSlice";
import { singOutAccount } from "../../redux/slices/accountSlice";
import "./css/navbar.css";

const LinkConfig = ({ link }) => {
  const { to, linkName } = link;

  const dispatch = useDispatch();
  const onHandleClick = () => {
    dispatch(signOut());
    dispatch(singOutAccount());
  };

  if (linkName !== "Sing out") {
    return (
      <NavLink className="navLink" to={to}>
        {linkName}
      </NavLink>
    );
  }
  return (
    <NavLink className="navLink" to={to} onClick={onHandleClick}>
      {linkName}
    </NavLink>
  );
};

export default LinkConfig;
