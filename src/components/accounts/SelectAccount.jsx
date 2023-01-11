import SelectDynamic from "../formComponents/SelectDynamic";
import AccountDetails from "./AccountDetails";

const SelectAccount = ({ AccountOrigin, reset, label, name, accounts }) => {
  const handleClickDifferentAccount = () => {
    reset({ AccountOrigin: false });
  };

  console.log(AccountOrigin);
  if (!AccountOrigin) {
    return <SelectDynamic label={label} name={name} accounts={accounts} />;
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
