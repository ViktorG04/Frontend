import React from "react";

const Loading = ({ status = false }) => {
  console.log(status);
  return <>{status && <p>Loading...</p>}</>;
};

export default Loading;
