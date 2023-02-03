import "./css/account.css";

const AccountDetails = ({ description, value = "" }) => {
  return (
    <div className="account-detail">
      <p>{description}:</p>
      <input type="text" value={value} disabled={true} />
    </div>
  );
};

export default AccountDetails;
