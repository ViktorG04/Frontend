const dateFormat = () => {
  let dateTime = new Date().toISOString();
  return dateTime.split("T")[0].split("-").join("-");
};

export default dateFormat;
