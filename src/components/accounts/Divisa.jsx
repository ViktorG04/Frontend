import React from "react";
import Paragraph from ".././paragraph/Paragraph";

const Divisa = ({ exchange }) => {
  const { origin, destiny, change } = exchange;
  return (
    <div>
      <Paragraph description="Origin" text={origin} />
      <Paragraph description="Destiny" text={destiny} />
      <Paragraph description="Change" text={change} />
    </div>
  );
};

export default Divisa;
