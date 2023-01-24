import React from "react";
import { useSelector } from "react-redux";
import SelectDynamic from "../formComponents/SelectDynamic";

const SelectPersonalAccounts = ({
  control,
  accountDestinyRegister,
  errors,
  accountSelected,
}) => {
  const { accounts } = useSelector((state) => state.accounts);

  const selectAccounts = accounts.filter(
    (account) => account.idAccount !== accountSelected
  );

  return (
    <SelectDynamic
      label="Account Beneficiary"
      name="accountDestiny"
      control={control}
      rules={accountDestinyRegister}
      accounts={selectAccounts}
      error={errors}
    />
  );
};

export default SelectPersonalAccounts;
