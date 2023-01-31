import React from "react";
import useTableDivisa from "../../hooks/useTableDivisa";

const TableDivisa = () => {
  const { currencies } = useTableDivisa();
  return (
    <table className="table">
      <thead>
        <tr>
          <th>CURRENCY</th>
          <th>EXCHANGE</th>
          <th>VALUE</th>
        </tr>
      </thead>
      <tbody>
        {currencies.map((currency, index) => (
          <tr key={`exchange-${index}`}>
            <td>{currency.origin}</td>
            <td>{currency.destiny}</td>
            <td>{currency.change}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableDivisa;
