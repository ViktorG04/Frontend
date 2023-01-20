const AccountDetails = ({ accountSelected, reset, restart = null }) => {
  const { bankName, numberAccount, available } = accountSelected;
  return (
    <div>
      <p>{bankName}</p>
      <p>{numberAccount}</p>
      <p>{available}</p>
      <button onClick={() => reset(restart)}>Select another account</button>
    </div>
  );
};

export default AccountDetails;
