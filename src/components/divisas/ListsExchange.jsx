import React from "react";
import TableDivisa from "./TableDivisa";
import "./css/divisa.css";
const ListsExchange = () => {
  return (
    <div className="container-listExchange">
      <h1>foreign exchange</h1>
      <TableDivisa />
      <h2>Conversion</h2>
    </div>
  );
};

export default ListsExchange;
