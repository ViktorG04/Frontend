import React from "react";
import TableDivisa from "./TableDivisa";
import "./css/divisa.css";
import ConsultDivisa from "./ConsultDivisa";
const ListsExchange = () => {
  return (
    <div className="container-listExchange">
      <h1>foreign exchange</h1>
      <TableDivisa />
      <h2>Change</h2>
      <ConsultDivisa />
    </div>
  );
};

export default ListsExchange;
