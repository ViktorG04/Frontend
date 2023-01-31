import Paragraph from "../paragraph/Paragraph";
import Button from "../formComponents/button/Button";
import "./css/account.css";
const AccountDetails = ({ accountSelected, reset, restart }) => {
  const { bankName, numberAccount, available } = accountSelected;
  return (
    <div className="account-detail">
      <div className="detail-body">
        <Paragraph description="Account Bank" text={bankName} />
        <Paragraph description="Number Account" text={numberAccount} />
        <Paragraph description="Available to expense" text={available} />
      </div>
      <Button
        name="Select different Account"
        onClick={() => restart && reset(restart)}
      />
    </div>
  );
};

export default AccountDetails;
