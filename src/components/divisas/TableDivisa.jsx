import React from "react";
import useTableDivisa from "../../hooks/useTableDivisa";
import "./css/divisa.css";
const TableDivisa = () => {
  const { currencies } = useTableDivisa();
  return (
    <div>
      {!currencies.length ? <p>Loading...</p> : null}
      <table className="table-divisa">
        <thead>
          <tr>
            <th className="th-left">CURRENCY</th>
            <th>EXCHANGE</th>
            <th className="th-right">VALUE</th>
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
    </div>
  );
};

export default TableDivisa;
