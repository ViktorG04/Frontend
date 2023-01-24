const dateFormat = () => {
  let dateTime = new Date().toISOString();
  return dateTime.split("T")[0];
};

export default dateFormat;
