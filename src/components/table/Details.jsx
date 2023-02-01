import React from "react";

const Details = ({ details, amount, symbol }) => {
  return (
    <div>
      {!details.length ? <p>Loading...</p> : null}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>DATE</th>
            <th>CATEGORY</th>
            <th>DESCRIPTION</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={`detail-${index}`}>
              <td>{parseInt(index) + 1}</td>
              <td>{detail.date}</td>
              <td>{detail.category}</td>
              <td>{detail.description}</td>
              <td>{detail.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>SUM</td>
            <td>{symbol + amount}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Details;
