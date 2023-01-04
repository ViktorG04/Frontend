const style = {
  color: "red",
};

const Notification = ({ message }) => {
  return <span style={style}>{message}</span>;
};

export default Notification;
