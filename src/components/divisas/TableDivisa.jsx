import React, { useState, useEffect, useCallback } from "react";
import { getCurrency } from "../../services/money";

const TableDivisa = () => {
  const [currencies, setCurrencies] = useState([]);

  const fetchData = useCallback(async () => {
    const data = await getCurrency();
    setCurrencies(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
