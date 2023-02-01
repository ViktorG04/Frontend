import { SYMBOL_MONEY } from "../../config/config";
import Paragraph from "../paragraph/Paragraph";
import Button from "../formComponents/button/Button";
import "./css/account.css";
const AccountDetails = ({ accountSelected, reset, restart }) => {
  const { bankName, numberAccount, available, money } = accountSelected;
  const symbol = SYMBOL_MONEY[money];
  return (
    <div className="account-detail">
      <div className="detail-body">
        <Paragraph description="Account Bank" text={bankName} />
        <Paragraph description="Number Account" text={numberAccount} />
        <Paragraph
          description="Available to expense"
          text={symbol + " " + available}
        />
      </div>
      <Button name="Select different Account" onClick={() => reset()} />
    </div>
  );
};

export default AccountDetails;
