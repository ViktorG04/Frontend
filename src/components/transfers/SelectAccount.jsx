import React from "react";
import AccountDetails from "../accounts/AccountDetails";
import SelectDynamic from "../formComponents/SelectDynamic";
import "./css/transfer.css";
const SelectAccount = ({ label, name, control, register, accounts, error, bankName }) => {
  return (
    <div className="container-account-selected">
      <SelectDynamic
        label={label}
        name={name}
        control={control}
        rules={register}
        accounts={accounts}
        error={error}
      />
      <AccountDetails description="Bank Name" value={bankName} margin="70px" />
    </div>
  );
};

export default SelectAccount;
