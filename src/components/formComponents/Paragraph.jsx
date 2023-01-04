import React from "react";
import "./css/form.css";
const Paragraph = ({ description, text }) => {
  return (
    <div className="paragraph-container">
      <strong>{`${description}:`}</strong>
      <p>{text}</p>
    </div>
  );
};

export default Paragraph;
