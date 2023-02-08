import "./css/account.css";

const AccountDetails = ({ description, value = "", margin }) => {
  return (
    <div className="account-detail">
      <p style={{ marginRight: margin }}>{description}:</p>
      <input type="text" value={value} disabled={true} />
    </div>
  );
};

export default AccountDetails;
