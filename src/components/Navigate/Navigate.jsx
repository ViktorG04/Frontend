import React from "react";
import { NavLink } from "react-router-dom";

const Navigate = ({ uid }) => {
  return (
    <div className="navigate-container">
      <ul>
        <li>
          <NavLink to={`add/${uid}`}>Register new Account</NavLink>
        </li>
        <li>
          <NavLink to="expenses-income">expenses or income</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigate;
