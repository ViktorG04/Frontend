import Paragraph from "../paragraph/Paragraph";

const AccountDetails = ({
  transferType,
  nameAccount,
  numberAccount,
  amountAvailable = false,
  handleClick,
}) => {
  return (
    <div>
      <h3>{transferType}</h3>
      <button onClick={handleClick}>Choose different Account</button>
      <Paragraph description="Name" text={nameAccount} />
      <Paragraph description="Number" text={numberAccount} />
      {amountAvailable ? <Paragraph description="Available" text={amountAvailable} /> : null}
    </div>
  );
};

export default AccountDetails;
