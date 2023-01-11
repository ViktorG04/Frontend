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
    <>
      <h2>foreign exchange</h2>
      {currencies
        ? currencies.map((currency, index) => (
            <Divisa key={`exchange-${index}`} exchange={currency} />
          ))
        : null}
    </>
  );
};

export default ListsExchange;
