import React, { useState, useEffect, useCallback } from "react";
import Divisa from "./Divisa";
import { getCurrency } from "../../services/money";
const ListsExchange = () => {
  const [currencies, setCurrencies] = useState([]);

  const fetchData = useCallback(async () => {
    const data = await getCurrency();
    setCurrencies(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h2>foreign exchange</h2>
      {currencies.length ? (
        currencies.map((currency, index) => (
          <Divisa key={`exchange-${index}`} exchange={currency} />
        ))
      ) : (
        <h3></h3>
      )}
    </div>
  );
};

export default ListsExchange;
