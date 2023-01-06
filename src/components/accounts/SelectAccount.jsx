import SelectDynamic from "../formComponents/SelectDynamic";
import AccountDetails from "./AccountDetails";

const SelectAccount = ({ AccountOrigin, accounts, reset, propsSelectOriginAccount }) => {
  const handleClickDifferentAccount = () => {
    reset({ AccountOrigin: false });
  };

  if (!AccountOrigin) {
    return <SelectDynamic props={propsSelectOriginAccount} />;
  }

  const accountFound = accounts.find((account) => account.idAccount === AccountOrigin.value);

  const { bankName, numberAccount, available } = accountFound;

  return (
    <AccountDetails
      transferType="Detail Account"
      nameAccount={bankName}
      numberAccount={numberAccount}
      amountAvailable={available}
      handleClick={handleClickDifferentAccount}
    />
  );
};

export default SelectAccount;
